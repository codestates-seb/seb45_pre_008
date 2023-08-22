package com.example.backendpre.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "User not found"),
    MEMBER_EXISTS(409, "User exists"),
    QUESTION_EXISTS(409, "Question exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    ACCESS_DENIED_USER(403,"Access Denied User");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
