package com.example.backendpre.answer.mapper;

import com.example.backendpre.answer.dto.AnswerPatchDto;
import com.example.backendpre.answer.dto.AnswerPostDto;
import com.example.backendpre.answer.dto.AnswerResponseDto;
import com.example.backendpre.answer.entity.Answer;
import com.example.backendpre.answer.service.AnswerService;
import com.example.backendpre.exception.BusinessLogicException;
import com.example.backendpre.exception.ExceptionCode;
import com.example.backendpre.member.service.MemberService;
import com.example.backendpre.question.service.QuestionService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
