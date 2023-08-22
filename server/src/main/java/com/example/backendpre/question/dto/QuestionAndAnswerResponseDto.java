package com.example.backendpre.question.dto;

import com.example.backendpre.answer.dto.AnswerResponseDto;
import com.example.backendpre.member.dto.MemberResponseDto;
import com.example.backendpre.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionAndAnswerResponseDto {

    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String content;
    private int view;
    private MemberResponseDto member;
    private AnswerResponseDto answer;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
