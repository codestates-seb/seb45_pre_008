package com.example.backendpre.member.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberLoginDto {


    private String email;

    private String password;
}

