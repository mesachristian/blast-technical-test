package com.blast.test.data.dto;

import com.blast.test.data.model.Category;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateEventDto {
    private String title;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;
    private String imageUrl;
    private String description;
    private int price;
    private ArrayList<String> information;
    private List<String> reviews;
    private double latitude;
    private double longitude;
    private ArrayList<Category> categories;
}
