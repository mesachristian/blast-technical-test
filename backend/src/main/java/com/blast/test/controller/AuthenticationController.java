package com.blast.test.controller;

import com.blast.test.business.AuthenticationService;
import com.blast.test.data.dto.AuthenticationRequestDto;
import com.blast.test.data.dto.AuthenticationResponseDto;
import com.blast.test.data.dto.RegisterDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDto> register(@RequestBody RegisterDto body){
        return ResponseEntity.ok(authenticationService.register(body));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDto> authenticate(@RequestBody AuthenticationRequestDto body){
        return ResponseEntity.ok(authenticationService.login(body));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request, HttpServletResponse reponse) throws IOException {
        authenticationService.refreshToken();
    }
}