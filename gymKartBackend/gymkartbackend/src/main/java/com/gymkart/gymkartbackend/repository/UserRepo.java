package com.gymkart.gymkartbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gymkart.gymkartbackend.entity.User;
import java.util.List;


public interface UserRepo extends JpaRepository<User,Long> {
        User findByEmail(String email);
}   
