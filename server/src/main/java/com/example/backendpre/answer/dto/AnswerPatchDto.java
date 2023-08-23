package com.example.backendpre.answer.dto;

import com.example.backendpre.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

@Getter
public class AnswerPatchDto {
    @Setter
    private long answerId;

    private String body;

    private Answer.AnswerStatus answerStatus;
}
