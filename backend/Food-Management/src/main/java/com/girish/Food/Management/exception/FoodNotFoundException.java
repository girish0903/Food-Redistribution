package com.girish.Food.Management.exception;

public class FoodNotFoundException extends RuntimeException{
    public FoodNotFoundException(Long id){
        super("Could not find the food with id "+ id);
    }
}
