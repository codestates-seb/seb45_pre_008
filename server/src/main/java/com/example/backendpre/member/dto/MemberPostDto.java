package com.example.backendpre.member.dto;


import com.example.backendpre.member.entity.Member;
import com.example.backendpre.auth.dto.AuthorityDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto {

    @NotNull
    @Email
    private String email;

    @NotBlank(message = "Username should not be blank")
    private String username;

    @NotBlank(message = "Password should not be blank")
    private String password;

    private Set<AuthorityDto> authorityDtoSet;

    public static MemberPostDto from(Member member) {
        if(member == null) return null;

        return MemberPostDto.builder()
                .email(member.getEmail())
                .username(member.getUsername())
                .authorityDtoSet(member.getAuthorities().stream()
                        .map(authority -> AuthorityDto.builder().authorityName(authority.getAuthorityName()).build())
                        .collect(Collectors.toSet()))
                .build();
    }
}
