package com.gymkart.gymkartbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gymkart.gymkartbackend.CartServices;
import com.gymkart.gymkartbackend.entity.Cart;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

// Razorpay imports
import com.razorpay.RazorpayClient;
import com.razorpay.Order;
import org.json.JSONObject;

@RestController
@RequestMapping("/cart")

public class CartController {

    @Autowired 
    CartServices cartServices;

    // Razorpay keys from application.properties
    @Value("${razorpay.key}")
    private String key;

    @Value("${razorpay.secret}")
    private String secret;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody Cart item, HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session == null || session.getAttribute("userEmail") == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Please login before adding items to cart");
        }

        return ResponseEntity.ok(cartServices.addTocart(item));
    }

    @GetMapping("/items")
    public List<Cart> getCartItems() {
        return cartServices.getCartItems();
    }

    // quantity increase
    @PutMapping("/increase/{id}")
    public Cart increase(@PathVariable Integer id) {
        return cartServices.incrementQuantity(id);
    }

    // quantity decrease
    @PutMapping("/decrease/{id}")
    public Cart decrease(@PathVariable Integer id) {
        return cartServices.decreamentQuantity(id);
    }

    // remove item
    @DeleteMapping("/remove/{id}")
    public String remove(@PathVariable Integer id) {
        return cartServices.removeItem(id);
    }

    // total amount
    @GetMapping("/total")
    public double getTotal() {
        return cartServices.getTotalAmount();
    }

    // clear cart
    @DeleteMapping("/clear")
    public String clearCart() {
        return cartServices.clearCart();
    }

    // creating order for Razorpay
   @PostMapping("/payment/createOrder")
public Map<String, Object> createOrder(@RequestBody Map<String, Object> data) throws Exception {

    Double amt = Double.parseDouble(data.get("amount").toString());

    RazorpayClient client = new RazorpayClient(key, secret);

    JSONObject orderRequest = new JSONObject();

    int amountInPaisa = (int) (amt * 100); 
    orderRequest.put("amount", amountInPaisa);
    orderRequest.put("currency", "INR");
    orderRequest.put("receipt", "txn_" + System.currentTimeMillis());

    Order order = client.orders.create(orderRequest);

    Map<String, Object> response = new HashMap<>();
    response.put("id", order.get("id"));
    response.put("amount", order.get("amount"));

    return response;
}
}
