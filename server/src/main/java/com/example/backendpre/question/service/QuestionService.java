package com.example.backendpre.question.service;

import com.example.backendpre.exception.BusinessLogicException;
import com.example.backendpre.exception.ExceptionCode;
import com.example.backendpre.member.entity.Member;
import com.example.backendpre.member.service.MemberService;
import com.example.backendpre.question.entity.Question;
import com.example.backendpre.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final MemberService memberService;
    private final QuestionRepository questionRepository;

    public QuestionService(MemberService memberService, QuestionRepository questionRepository) {
        this.memberService = memberService;
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        verifyExistsTitle(question.getTitle());

        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        // question 내용 변경시 날짜 수정
        Optional.ofNullable(question.getModifiedAt())
                .ifPresent(questionModifiedAt -> findQuestion.setModifiedAt(questionModifiedAt));

        // 제목수정
        Optional.ofNullable(question.getTitle())
                .ifPresent(questionTitle -> findQuestion.setTitle(questionTitle));

        // 내용수정
        Optional.ofNullable(question.getContent())
                .ifPresent(questionBody -> findQuestion.setContent(questionBody));

        // 글 삭제
        Optional.ofNullable(question.getQuestionStatus())
                .ifPresent(questionStatus -> findQuestion.setQuestionStatus(questionStatus));

        Question updatedQuestion = questionRepository.save(findQuestion);

        return updatedQuestion;
    }

    public Question findQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        findQuestion.setView(findQuestion.getView() + 1);
        questionRepository.save(findQuestion);

        return findQuestion;

//        return questionRepository.findById(questionId)
//                .orElseThrow(() -> new ChangeSetPersister.NotFoundException("Question not found"));
    }

    public List<Question> findQuestions() {
        return questionRepository.findAll();
    }

//    /**
//     * 모든 질문 가져오기(삭제된 글 제외)
//     */
//
//    public Page<Question> findQuestions(int page, int size, String sort) {
//        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sort).descending());
//
//        Page<Question> findAllQuestions = questionRepository.findAllByQuestionStatus(pageRequest, Question.QuestionStatus.QUESTION_EXIST);
//
//        // Question List가 0인 경우 예외 발생
//        VerifiedNoQuestion(findAllQuestions);
//
//        return findAllQuestions;
//    }

    public Member findQuestionMember(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        return findQuestion.getMember();
    }

//    /**
//     * 작성된 질문 검색(search)
//     */
//    public Page<Question> searchQuestions(String keyWord, int page, int size, String sort) {
//
//        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sort).descending());
//        List<Question> searchAllQuestions = questionRepository.searchQuestionByKeyWord(keyWord);
//
//        int start = (int)pageRequest.getOffset();
//        int end = Math.min((start + pageRequest.getPageSize()), searchAllQuestions.size());
//        PageImpl<Question> questions = new PageImpl<>(searchAllQuestions.subList(start, end), pageRequest, searchAllQuestions.size());
//
//        return questions;
//    }

//    public void deleteQuestion(long questionId) {
//        questionRepository.deleteById(questionId);
//    }

    private void VerifiedNoQuestion(Page<Question> findAllQuestion) {
        if (findAllQuestion.getTotalElements() == 0) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
    }

    public Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    private void verifyExistsTitle(String title) {
        Optional<Question> question = questionRepository.findByTitle(title);
        if (question.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }
}

