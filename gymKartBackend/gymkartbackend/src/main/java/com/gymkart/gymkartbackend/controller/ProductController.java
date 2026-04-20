package com.gymkart.gymkartbackend.controller;

import java.util.List;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.gymkart.gymkartbackend.EnumVar.Category;
import com.gymkart.gymkartbackend.entity.Product;

import com.gymkart.gymkartbackend.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Add Product with Image
    @PostMapping("/add")
    public Product addProduct(
            @RequestParam String name,
            @RequestParam String brand,
            @RequestParam double price,
            @RequestParam String description,
            @RequestParam int stock,
            @RequestParam Category category,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        try {
            Product product = new Product();
            product.setName(name);
            product.setBrand(brand);
            product.setPrice(price);
            product.setDescription(description);
            product.setStock(stock);
            product.setCategory(category);

            if (image != null && !image.isEmpty()) {
                String imageBase64 = Base64.getEncoder().encodeToString(image.getBytes());
                product.setImageBase64(imageBase64);
            }

            return productRepository.save(product);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error adding product", e);
        }
    }

    // Get All Products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get By Category
    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable Category category) {
        return productRepository.findByCategory(category);
    }

    // // Delete Product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }

    // search and filtering
    //  Global Search
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String keyword) {
        return productRepository.searchAll(keyword);
    }
}