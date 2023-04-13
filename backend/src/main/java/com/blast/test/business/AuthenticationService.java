package com.blast.test.business;

import com.blast.test.data.dto.AuthenticationRequestDto;
import com.blast.test.data.dto.AuthenticationResponseDto;
import com.blast.test.data.dto.RegisterDto;
import com.blast.test.data.model.Role;
import com.blast.test.data.model.User;
import com.blast.test.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthenticationResponseDto register(RegisterDto data){
        User newUser = User.builder()
                .name(data.getName())
                .email(data.getEmail())
                .password(passwordEncoder.encode(data.getPassword()))
                .role(Role.USER)
                .build();

        userRepository.save(newUser);

        var jwtToken = jwtService.generateToken(newUser);

        return AuthenticationResponseDto.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponseDto login(AuthenticationRequestDto data){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        data.getEmail(),
                        data.getPassword()
                )
        );

        var user = userRepository.findByEmail(data.getEmail()).orElseThrow();

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponseDto.builder()
                .token(jwtToken)
                .build();
    }

    public void refreshToken(){

    }
}
