package com.girish.Food.Management.Service;

import com.girish.Food.Management.model.AnalyticsData;

public interface AnalyticsService {
    AnalyticsData getAnalyticsData();

    AnalyticsData addAnalyticsData(AnalyticsData analyticsData);

}
