package com.blast.test.business;

import com.blast.test.data.dto.SubscribeEventDto;
import com.blast.test.data.model.Event;
import com.blast.test.data.repository.EventRepository;
import com.blast.test.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private EmailSenderService emailSenderService;
    @Autowired
    private EventRepository eventRepository;

    private static final String EMAIL_BODY = "Saludos!\n\nBlast te informa que te has inscrito al evento %s el dia %s.\n\nDisfurta tu experencia!";

    public String greeting(HttpServletRequest request){
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            return null;
        }
        final String token = authHeader.substring(7);

        final String userEmail = jwtService.extractUsername(token);

        if(userEmail != null){
            var user = userRepository.findByEmail(userEmail).orElseThrow();
            return "Hello " + user.getName() + "!";
        }

        return "Hello";
    }

    public void sendEmail(HttpServletRequest request){
        final String userEmail = this.getUserEmail(request);
        if(userEmail != null){
            emailSenderService.sendEmail(userEmail, "Test Email", "This is a blast test email");
        }
    }

    public String getUserEmail(HttpServletRequest request){
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            return null;
        }
        final String token = authHeader.substring(7);

        final String userEmail = jwtService.extractUsername(token);

        return userEmail;
    }

    public void subscribeToEvent(HttpServletRequest request, SubscribeEventDto body){
        final String userEmail = this.getUserEmail(request);
        if(userEmail != null){
            Optional<Event> event = eventRepository.findByTitle(body.getEventId());
            if(!event.isEmpty()){
                Event temp = event.get();
                emailSenderService.sendEmail(userEmail, "Suscrito a un nuevo Evento de Blast", String.format(EMAIL_BODY, temp.getTitle(), temp.getDate().toString()));
            }

        }
    }
}
