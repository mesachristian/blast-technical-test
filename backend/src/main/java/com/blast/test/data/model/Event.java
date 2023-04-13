package com.blast.test.data.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Event {

    @Id
    private String Id;
    private String title;
    private Date date;
    private String imageUrl;
    private String description;
    private int price;
    private List<String> information;
    @DBRef
    private List<Review> reviews;
    private double latitude;
    private double longitude;
    private List<Category> categories;
}
