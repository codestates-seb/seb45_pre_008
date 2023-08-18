package com.example.backendpre.answer.controller;

import com.example.backendpre.answer.dto.AnswerPatchDto;
import com.example.backendpre.answer.dto.AnswerPostDto;
import com.example.backendpre.answer.entity.Answer;
import com.example.backendpre.answer.mapper.AnswerMapper;
import com.example.backendpre.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1/answers")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    /**
     * Answer 작성
     */
    @PostMapping
    public ResponseEntity postAnswer(
            @Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return ResponseEntity.ok(mapper.answerToAnswerResponseDto(answer));
    }

    /**
     * Answer 수정
     */
    @PatchMapping("{answer-id}")
    public ResponseEntity patchAnswer(
            @PathVariable("answer-id") @Positive long answerId,
            @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }

    /**
     * Answer 삭제
     */
    @DeleteMapping("{answer-id}")
    public void deleteAnswer(@PathVariable("answer-id") long answerID) {
        answerService.deleteAnswer(answerID);
    }


}
