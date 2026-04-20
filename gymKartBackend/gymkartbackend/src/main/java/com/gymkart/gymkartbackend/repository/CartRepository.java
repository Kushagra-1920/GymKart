package com.gymkart.gymkartbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gymkart.gymkartbackend.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {

    // custom query method
    Cart findByProductId(Long ProductId);

    
}
