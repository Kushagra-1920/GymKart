package com.gymkart.gymkartbackend.entity;

import com.gymkart.gymkartbackend.EnumVar.Category;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String brand;
    private double price;
    private String description;
    private int stock;

    @Lob
    @Column(columnDefinition = "LONGTEXT") 
    private String imageBase64;

    @Enumerated(EnumType.STRING)
    private Category category;
}
