package com.example.backendpre.answer.repository;

import com.example.backendpre.answer.entity.Answer;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

//    @Query("SELECT * FROM ANSWER WHERE ANSWER_ID = :answerId")
//    Optional<Answer> findByAnswerId(Long answerId);

}
