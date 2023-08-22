package com.example.backendpre.answer.entity;

import com.example.backendpre.member.entity.Member;
import com.example.backendpre.question.entity.Question;
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

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private AnswerStatus answerStatus = AnswerStatus.Answer_EXIST;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
    }

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
