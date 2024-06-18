package com.girish.Food.Management.Service;

import com.girish.Food.Management.model.Food;
import com.girish.Food.Management.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;

    public Food saveDetails(Food food){
        return foodRepository.save(food);
    }
}
