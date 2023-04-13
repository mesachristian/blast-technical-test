package com.blast.test.business;

import com.blast.test.data.dto.CreateEventDto;
import com.blast.test.data.dto.EventSummaryDto;
import com.blast.test.data.model.Event;
import com.blast.test.data.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
    public List<EventSummaryDto> getEventsByCategory(String category){
        return null;
    }

    public Event createEvent(CreateEventDto data){
        Event newEvent = Event.builder()
                .title(data.getTitle())
                .date(data.getDate())
                .imageUrl(data.getImageUrl())
                .description(data.getDescription())
                .price(data.getPrice())
                .information(data.getInformation())
                .reviews(new ArrayList<>())
                .latitude(data.getLatitude())
                .longitude(data.getLongitude())
                .categories(data.getCategories())
                .build();

        return eventRepository.save(newEvent);
    }


}
