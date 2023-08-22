package com.example.backendpre.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Setter
@Getter
@NoArgsConstructor
public class QuestionPostDto {
    @Positive
    private Long questionId;

    @NotBlank(message = "여기에 제목을 입력하세요.")
    private String title;

    @NotBlank(message = "여기에 내용을 입력하세요.")
    private  String content;

//    private  long memberId;
}
