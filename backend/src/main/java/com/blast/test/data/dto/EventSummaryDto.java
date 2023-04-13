package com.blast.test.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventSummaryDto {
    private String id;
    private String title;
    private String imageUrl;
    private int price;
    private float stars;
}
