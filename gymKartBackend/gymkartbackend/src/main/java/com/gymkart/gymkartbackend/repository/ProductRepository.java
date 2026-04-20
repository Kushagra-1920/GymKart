package com.gymkart.gymkartbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gymkart.gymkartbackend.EnumVar.Category;
import com.gymkart.gymkartbackend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

        List<Product> findByCategory(Category category);

        @Query("SELECT p FROM Product p WHERE " +
                        "LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
                        "LOWER(p.brand) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
                        "LOWER(p.category) LIKE LOWER(CONCAT('%', :keyword, '%'))")
        List<Product> searchAll(@Param("keyword") String keyword);
}
