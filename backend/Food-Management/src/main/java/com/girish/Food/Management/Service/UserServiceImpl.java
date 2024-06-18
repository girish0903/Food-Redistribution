package com.girish.Food.Management.Service;

import com.girish.Food.Management.dto.UserDto;
import com.girish.Food.Management.model.User;
import com.girish.Food.Management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void save(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setName(userDto.getName());
        user.setRole(userDto.getRole());
        user.setAddress(userDto.getAddress());
        user.setContact(userDto.getContact());
        userRepository.save(user);
    }

    @Override
    public String authenticate(String email, String password) {
        // Retrieve user from database by email
        User user = userRepository.findByEmail(email);

        // Check if user exists and if the password matches
        if (user != null && user.getPassword().equals(password)) {
            return user.getRole(); // Authentication successful, return the role
        }
        return null; // Authentication failed
    }

    @Override
    public List<User> findByRole(String role) {
        return userRepository.findByRole(role);
    }
}
