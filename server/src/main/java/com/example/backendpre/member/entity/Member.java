package com.example.backendpre.member.entity;

import com.example.backendpre.auth.entity.Authority;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "MEMBER")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Enumerated(EnumType.STRING)
    @Column(name = "STATUS")
    private MemberStatus memberStatus = MemberStatus.USER_EXIST;

    @Column(nullable = false, updatable = false, unique = true, columnDefinition = "TEXT")
    private String email;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String password;

    @Column(name = "activated")
    private boolean activated;

    public enum MemberStatus {
        USER_NOT_EXIST("존재하지 않는 회원입니다."),
        USER_EXIST("존재하는 회원입니다.");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }

    @Column(nullable = true)
    private String role;

    @ManyToMany
    @JoinTable(
            name = "member_authority",
            joinColumns = {@JoinColumn(name = "member_id", referencedColumnName = "memberId")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;
}

