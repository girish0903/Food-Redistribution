package com.girish.Food.Management.Service;

import com.girish.Food.Management.model.AnalyticsData;
import com.girish.Food.Management.repository.AnalyticsDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnalyticsServiceImpl implements AnalyticsService {

    private final AnalyticsDataRepository analyticsDataRepository;

    @Autowired
    public AnalyticsServiceImpl(AnalyticsDataRepository analyticsDataRepository) {
        this.analyticsDataRepository = analyticsDataRepository;
    }

    @Override
    public AnalyticsData getAnalyticsData() {
        // Example implementation, you can customize this based on your requirements
        return analyticsDataRepository.findById(1L).orElse(null);
    }

    @Override
    public AnalyticsData addAnalyticsData(AnalyticsData analyticsData) {
        // Example implementation to save new analytics data
        return analyticsDataRepository.save(analyticsData);
    }

    // Other methods implementing AnalyticsService interface
}