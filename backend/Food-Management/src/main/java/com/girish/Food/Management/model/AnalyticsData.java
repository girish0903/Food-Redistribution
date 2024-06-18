package com.girish.Food.Management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class AnalyticsData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int totalUsers;
    private int activeUsers;
    private int inactiveUsers;
    private LocalDate startDate;
    private LocalDate endDate;
    private int userGrowth;
    private int roleDistribution;

    public AnalyticsData(Long id, int totalUsers, int activeUsers, int inactiveUsers, LocalDate startDate, LocalDate endDate, int userGrowth, int roleDistribution) {
        this.id = id;
        this.totalUsers = totalUsers;
        this.activeUsers = activeUsers;
        this.inactiveUsers = inactiveUsers;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userGrowth = userGrowth;
        this.roleDistribution = roleDistribution;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(int totalUsers) {
        this.totalUsers = totalUsers;
    }

    public int getActiveUsers() {
        return activeUsers;
    }

    public void setActiveUsers(int activeUsers) {
        this.activeUsers = activeUsers;
    }

    public int getInactiveUsers() {
        return inactiveUsers;
    }

    public void setInactiveUsers(int inactiveUsers) {
        this.inactiveUsers = inactiveUsers;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getUserGrowth() {
        return userGrowth;
    }

    public void setUserGrowth(int userGrowth) {
        this.userGrowth = userGrowth;
    }

    public int getRoleDistribution() {
        return roleDistribution;
    }

    public void setRoleDistribution(int roleDistribution) {
        this.roleDistribution = roleDistribution;
    }
}