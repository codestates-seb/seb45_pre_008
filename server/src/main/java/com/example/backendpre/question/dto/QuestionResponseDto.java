package com.example.backendpre.question.dto;

import com.example.backendpre.question.entity.Question;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private Question.QuestionStatus questionStatus;
    private long memberId;
    private String username;
    private String title;
    private String content;
    private LocalDateTime createAt;
    private LocalDateTime modifiedAt;
}
