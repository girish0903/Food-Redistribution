package com.girish.Food.Management.controller;

import com.girish.Food.Management.Service.AnalyticsService;
import com.girish.Food.Management.model.AnalyticsData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
//@RequestMapping("/analytics")
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    @Autowired
    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/analytics")
    public AnalyticsData getAnalyticsData() {
        return analyticsService.getAnalyticsData();
    }

    @PostMapping("/analytics/add") // Corrected endpoint mapping
    public ResponseEntity<AnalyticsData> addAnalyticsData(@RequestBody AnalyticsData analyticsData) {
        AnalyticsData savedData = analyticsService.addAnalyticsData(analyticsData);
        return ResponseEntity.ok(savedData);
    }

    // Other endpoints if needed
}