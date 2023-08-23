package com.example.backendpre.member.service;


import com.example.backendpre.auth.entity.Authority;
import com.example.backendpre.auth.util.SecurityUtil;
import com.example.backendpre.exception.DuplicateMemberException;
import com.example.backendpre.exception.NotFoundMemberException;
import com.example.backendpre.member.dto.MemberPostDto;
import com.example.backendpre.member.entity.Member;
import com.example.backendpre.member.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Collections;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public MemberPostDto signup(MemberPostDto memberDto) {
        if (memberRepository.findOneWithAuthoritiesByUsername(memberDto.getEmail()).orElse(null) != null) {
            throw new DuplicateMemberException("이미 가입되어 있는 유저입니다.");
        }

        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

        Member member = Member.builder()
                .username(memberDto.getUsername())
                .email(memberDto.getEmail())
                .password(passwordEncoder.encode(memberDto.getPassword()))
                .authorities(Collections.singleton(authority))
                .activated(true)
                .build();

        return MemberPostDto.from(memberRepository.save(member));
    }

    @Transactional(readOnly = true)
    public MemberPostDto getUserWithAuthorities(String email) {
        return MemberPostDto.from(memberRepository.findOneWithAuthoritiesByUsername(email).orElse(null));
    }

    @Transactional(readOnly = true)
    public MemberPostDto getMyUserWithAuthorities() {
        return MemberPostDto.from(
                SecurityUtil.getCurrentUsername()
                        .flatMap(memberRepository::findOneWithAuthoritiesByUsername)
                        .orElseThrow(() -> new NotFoundMemberException("Member not found"))
        );
    }
    public void deleteMember(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id: " + memberId));

        memberRepository.delete(member);
    }
}

