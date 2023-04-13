package com.blast.test.data.repository;

import com.blast.test.data.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends MongoRepository<Event, String> {
    List<Event> findByCategoriesContaining(String category);
    Optional<Event> findByTitle(String title);
}
