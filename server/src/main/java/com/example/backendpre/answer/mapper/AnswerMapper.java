package com.example.backendpre.answer.mapper;

import com.example.backendpre.answer.dto.AnswerPatchDto;
import com.example.backendpre.answer.dto.AnswerPostDto;
import com.example.backendpre.answer.dto.AnswerResponseDto;
import com.example.backendpre.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

}
