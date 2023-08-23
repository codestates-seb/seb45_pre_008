package com.example.backendpre.question.entity;

import com.example.backendpre.answer.entity.Answer;
import com.example.backendpre.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "QUESTIONS")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_EXIST;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private int view;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }

    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST})
    private List<Answer> answers = new ArrayList<>();


    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    public enum QuestionStatus {
        QUESTION_NOT_EXIST("존재하지 않는 질문입니다."),
        QUESTION_EXIST("존재하는 질문");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}
