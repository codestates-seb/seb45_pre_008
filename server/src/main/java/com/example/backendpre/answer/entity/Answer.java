package com.example.backendpre.answer.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    /*
//    User와 매핑
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

//    question과 매핑
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
     */

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private AnswerStatus answerStatus = AnswerStatus.Answer_EXIST;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt = LocalDateTime.now();

    public enum AnswerStatus {
        Answer_EXIST("이미 존재하는 답변입니다"),
        Answer_NOT_EXIST("존재하지 않는 답변입니다.");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
}
