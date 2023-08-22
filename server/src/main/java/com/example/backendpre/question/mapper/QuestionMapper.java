package com.example.backendpre.question.mapper;

import com.example.backendpre.question.dto.QuestionPatchDto;
import com.example.backendpre.question.dto.QuestionPostDto;
import com.example.backendpre.question.dto.QuestionResponseDto;
import com.example.backendpre.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
    QuestionResponseDto questionToQuestionResponseDto(Question question);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);


}
