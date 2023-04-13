package com.blast.test.controller;

import com.blast.test.business.EventService;
import com.blast.test.data.dto.CreateEventDto;
import com.blast.test.data.dto.EventSummaryDto;
import com.blast.test.data.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/event")
@CrossOrigin(origins = "http://localhost:5173")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("")
    public ResponseEntity<List<EventSummaryDto>> getEventsByCategory(@RequestParam String category){
        return ResponseEntity.ok(new ArrayList<>());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody CreateEventDto body){
        return ResponseEntity.ok(eventService.createEvent(body));
    }
}
