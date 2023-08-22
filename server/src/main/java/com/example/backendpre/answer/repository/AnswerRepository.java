package com.example.backendpre.answer.repository;

import com.example.backendpre.answer.entity.Answer;
import com.example.backendpre.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    //    @Query("SELECT * FROM ANSWER WHERE ANSWER_ID = :answerId")
    //    Optional<Answer> findByAnswerId(Long answerId);
    @Query("select c from Answer c where c.question =:question and c.answerStatus =:answerStatus")
    Page<Answer> finaAllByQuestionAndAnswerStatus(Pageable pageable, @Param("question") Question question, @Param("answerStatus") Answer.AnswerStatus answerStatus);
}
