package com.example.backendpre.answer.dto;

import lombok.Getter;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPostDto {
    @Id
    private long answerId;

    @NotBlank
    private String body;

}
