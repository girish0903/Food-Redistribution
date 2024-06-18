package com.girish.Food.Management.controller;

import com.girish.Food.Management.exception.FoodNotFoundException;
import com.girish.Food.Management.model.Food;
import com.girish.Food.Management.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class FoodController {
    @Autowired
    private FoodRepository foodRepository;

    @PostMapping("/addFood")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    Food newFood(@RequestBody Food newFood) {
        return foodRepository.save(newFood);
    }

    @GetMapping("/food")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    List<Food> getAllFood(){
        return foodRepository.findAll();
    }

    @GetMapping("food/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    Food getFoodById(@PathVariable Long id){
        return foodRepository.findById(id)
                .orElseThrow(()->new FoodNotFoundException(id));
    }

    @PutMapping("/food/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    Food updateFood(@RequestBody Food newFood,@PathVariable Long id){
        return foodRepository.findById(id)
                .map(food -> {
                    food.setId(newFood.getId());
                    food.setName(newFood.getName());
                    food.setDescription(newFood.getDescription());
                    food.setQuantity(newFood.getQuantity());
                    food.setExpiryDate(newFood.getExpiryDate());
                    food.setRestaurantId(newFood.getRestaurantId());
                    return foodRepository.save(food);
                }).orElseThrow(()-> new FoodNotFoundException(id));
    }

    @DeleteMapping("/food/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    String deleteFood(@PathVariable Long id){
        if(!foodRepository.existsById(id)){
            throw new FoodNotFoundException(id);
        }
        foodRepository.deleteById(id);
        return "Food with id"+ id+ "has been deleted";
    }
}
