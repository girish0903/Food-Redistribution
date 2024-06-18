package com.girish.Food.Management.controller;


import com.girish.Food.Management.Service.UserService;
import com.girish.Food.Management.dto.UserDto;
import com.girish.Food.Management.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController


public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @ResponseBody
    public String registerUser(@RequestBody UserDto userDto) {
        userService.save(userDto);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @ResponseBody
    public Map<String, String> loginUser(@RequestBody UserDto userDto) {
        String role = userService.authenticate(userDto.getEmail(), userDto.getPassword());
        Map<String, String> response = new HashMap<>();
        if (role != null) {
            response.put("message", "Login successful!");
            response.put("role", role);
        } else {
            response.put("message", "Invalid username or password");
        }
        return response;
    }


    @GetMapping("/users/byRole")
    public List<User> getUsersByRole(@RequestParam("role") String role) {
        return userService.findByRole(role);
    }



}