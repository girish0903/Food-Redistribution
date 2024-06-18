package com.girish.Food.Management.repository;

import com.girish.Food.Management.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    List<User> findByRole(String role);
}

