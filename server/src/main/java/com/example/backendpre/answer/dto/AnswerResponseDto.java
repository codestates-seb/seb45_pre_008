package com.example.backendpre.answer.dto;

import com.example.backendpre.answer.entity.Answer;
import com.example.backendpre.member.dto.MemberResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private Answer.AnswerStatus answerStatus;
    private String body;
    private MemberResponseDto memberResponseDto;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
