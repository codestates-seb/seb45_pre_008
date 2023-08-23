package com.example.backendpre.member.controller;

import com.example.backendpre.member.dto.MemberPostDto;
import com.example.backendpre.member.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/v1")
public class MemberController {
    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/sign-up")
    public ResponseEntity<MemberPostDto> signup(
            @Valid @RequestBody MemberPostDto memberDto
    ) {
        return ResponseEntity.ok(memberService.signup(memberDto));
    }

    @GetMapping("/members/{member-id}")
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<MemberPostDto> getMyUserInfo(HttpServletRequest request) {
        return ResponseEntity.ok(memberService.getMyUserWithAuthorities());
    }

    @GetMapping("/members/{email}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<MemberPostDto> getUserInfo(@PathVariable String email) {
        return ResponseEntity.ok(memberService.getUserWithAuthorities(email));
    }

    @DeleteMapping("/members/{member-id}")
    public ResponseEntity<Void> deleteMember(@PathVariable("member-id") Long memberId) {
        memberService.deleteMember(memberId);
        return ResponseEntity.noContent().build();
    }
}

