package com.example.backendpre.question.mapper;

import com.example.backendpre.question.dto.QuestionPatchDto;
import com.example.backendpre.question.dto.QuestionPostDto;
import com.example.backendpre.question.dto.QuestionResponseDto;
import com.example.backendpre.question.dto.QuestionResponseDto.QuestionResponseDtoBuilder;
import com.example.backendpre.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-23T09:15:34+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.19 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionPostDto.getQuestionId() );
        question.setTitle( questionPostDto.getTitle() );
        question.setContent( questionPostDto.getContent() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionPatchDto.getQuestionId() );
        question.setQuestionStatus( questionPatchDto.getQuestionStatus() );
        question.setTitle( questionPatchDto.getTitle() );
        question.setContent( questionPatchDto.getContent() );

        return question;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        if ( question.getQuestionId() != null ) {
            questionResponseDto.questionId( question.getQuestionId() );
        }
        questionResponseDto.questionStatus( question.getQuestionStatus() );
        questionResponseDto.title( question.getTitle() );
        questionResponseDto.content( question.getContent() );
        questionResponseDto.modifiedAt( question.getModifiedAt() );

        return questionResponseDto.build();
    }

    @Override
    public List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }
}
