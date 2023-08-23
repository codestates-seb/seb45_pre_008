package com.example.backendpre.question.controller;

import com.example.backendpre.answer.mapper.AnswerMapper;
import com.example.backendpre.answer.service.AnswerService;
import com.example.backendpre.member.service.MemberService;
import com.example.backendpre.question.dto.QuestionPatchDto;
import com.example.backendpre.question.dto.QuestionPostDto;
import com.example.backendpre.question.dto.QuestionResponseDto;
import com.example.backendpre.question.entity.Question;
import com.example.backendpre.question.mapper.QuestionMapper;
import com.example.backendpre.question.service.QuestionService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1")
@Validated
@Slf4j
@AllArgsConstructor
public class QuestionController {
    //    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final MemberService memberService;
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

    /**
     * 질문 작성 API
     */
    @PostMapping("/question/write")
    public ResponseEntity postQuestion(
            @Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(
                mapper.questionPostDtoToQuestion(questionPostDto));

        return ResponseEntity.ok(mapper.questionToQuestionResponseDto(question));
    }

    /**
     * 자신이 작성한 질문 글 수정 API
     */
    @PatchMapping("/question/{question-id}")
    public ResponseEntity patchQuestion(
            @PathVariable("question-id") @Positive @NotNull long questionId,
            @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);

        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }


    @GetMapping("/question/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    /**
     * 전체 질문리스트 API
     */
    @GetMapping("/questions")
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();

        List<QuestionResponseDto> response = questions.stream()
                .map(question -> mapper.questionToQuestionResponseDto(question))
                .collect(Collectors.toList());

        return new ResponseEntity(response, HttpStatus.OK);
    }

//    @GetMapping("/questions")
//    public ResponseEntity getQuestions(@Positive @RequestParam("page") int page,
//                                       @Positive @RequestParam("size") int size,
//                                       @RequestParam("sort") String sort) {
//
//        Page<Question> findQuestion = questionService.findQuestions(page - 1, size, sort);
//
//        List<Question> questions = findQuestion.getContent();
////        List<QuestionResponseDto> questionResponseDtos = mapper.questionsToQuestionResponseDtos(questions);
//
//        return new ResponseEntity<>(mapper.questionsToQuestionResponseDtos(questions), HttpStatus.OK);
//    }

    @DeleteMapping("/question/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}