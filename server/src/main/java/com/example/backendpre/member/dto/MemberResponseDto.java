package com.example.backendpre.member.dto;

import com.example.backendpre.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberResponseDto {
    private String username;
    private String email;
//    private String image;
    private Member.MemberStatus memberStatus;
}

