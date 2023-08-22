package com.example.backendpre.answer.service;

import com.example.backendpre.answer.entity.Answer;
import com.example.backendpre.answer.repository.AnswerRepository;
import com.example.backendpre.exception.BusinessLogicException;
import com.example.backendpre.exception.ExceptionCode;
import com.example.backendpre.member.entity.Member;
import com.example.backendpre.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Member findAnswerMember(long answerId) {
        Answer verifiedAnswer = findVerifiedAnswer(answerId);
        return verifiedAnswer.getMember();
    }

    public Page<Answer> findAnswers(Question question, int page, int size, String sort) {
        Page<Answer> allAnswers = answerRepository.finaAllByQuestionAndAnswerStatus(
                PageRequest.of(page - 1, size, Sort.by(sort).descending()),
                question, Answer.AnswerStatus.Answer_EXIST);
        verifiedNoAnswer(allAnswers);

        return allAnswers;
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        // 내용(Body) 수정
        Optional.ofNullable(answer.getBody())
                .ifPresent(answerBody -> findAnswer.setBody(answerBody));

        // 업데이트 날짜 변경
        Optional.of(answer.getModifiedAt())
                .ifPresent(answerModifiedAt -> findAnswer.setModifiedAt(answerModifiedAt));

        // 글 삭제 로직
        Optional.of(answer.getAnswerStatus())
                .ifPresent(answerStatus -> findAnswer.setAnswerStatus(answerStatus));

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }

    /**
     * updateAnswer에 글 삭제 로직 작성했습니다.
     * deleteAnswer는 따로 없습니다.
     */

    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    /**
     * 만약 Answer List가 0개면 예외 발생
     */
    private void verifiedNoAnswer(Page<Answer> findAllAnswer) throws BusinessLogicException {
        if (findAllAnswer.getTotalElements() == 0) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        }
    }

}
