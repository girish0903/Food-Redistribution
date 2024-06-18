package com.girish.Food.Management.Service;

import com.girish.Food.Management.dto.UserDto;
import com.girish.Food.Management.model.User;

import java.util.List;

public interface UserService {
    void save(UserDto userDto);
    String authenticate(String email, String password);
    List<User> findByRole(String role);
}
