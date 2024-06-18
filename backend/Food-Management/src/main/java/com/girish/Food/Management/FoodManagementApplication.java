package com.girish.Food.Management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@ComponentScan(basePackages = "com.girish.Food.Management")

public class FoodManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodManagementApplication.class, args);
	}



}
