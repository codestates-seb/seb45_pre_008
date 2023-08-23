package com.example.backendpre.answer.controller;

import com.example.backendpre.answer.dto.AnswerPatchDto;
import com.example.backendpre.answer.dto.AnswerPostDto;
import com.example.backendpre.answer.entity.Answer;
import com.example.backendpre.answer.mapper.AnswerMapper;
import com.example.backendpre.answer.service.AnswerService;
import com.example.backendpre.member.service.MemberService;
import com.example.backendpre.question.service.QuestionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1")
@Validated
@AllArgsConstructor
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper mapper;
    private MemberService memberService;
    private QuestionService questionService;


    /**
     * Answer 작성
     */
    @PostMapping("/answer/write")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return ResponseEntity.ok(mapper.answerToAnswerResponseDto(answer));
    }


    /**
     * Answer 수정, 삭제
     */
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(
            @PathVariable("answer-id") @Positive long answerId,
            @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);

        Answer answer = mapper.answerPatchDtoToAnswer(answerPatchDto);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(updatedAnswer), HttpStatus.OK);
    }
    

}
