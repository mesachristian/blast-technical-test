package com.blast.test.controller;

import com.blast.test.business.UserService;
import com.blast.test.data.dto.SubscribeEventDto;
import com.blast.test.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/greeting")
    public ResponseEntity<String> greeting(HttpServletRequest request){
        return ResponseEntity.ok(userService.greeting(request));
    }

    @GetMapping("/send-mail")
    public ResponseEntity<String> sendMail(HttpServletRequest request){
        userService.sendEmail(request);
        return ResponseEntity.ok("Email sended to user");
    }

    @PostMapping("/subscribe")
    public ResponseEntity<String> subscribeToEvent(HttpServletRequest request, @RequestBody SubscribeEventDto body){
        userService.subscribeToEvent(request, body);
        return ResponseEntity.ok("User subscribed");
    }
}
