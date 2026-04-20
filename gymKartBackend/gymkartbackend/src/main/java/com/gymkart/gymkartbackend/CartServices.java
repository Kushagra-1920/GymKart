package com.gymkart.gymkartbackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gymkart.gymkartbackend.entity.Cart;
import com.gymkart.gymkartbackend.repository.CartRepository;

@Service
public class CartServices {

    @Autowired
    CartRepository cartRepository;

    public Cart addTocart(Cart item) {

        Cart existing = cartRepository.findByProductId(item.getProductId());

        if (existing != null) {
            existing.setQuantity(existing.getQuantity() + 1);
            return cartRepository.save(existing);
        } else {
            item.setQuantity(1);
            return cartRepository.save(item);
        }
    }

    // get all cart items
    public List<Cart> getCartItems() {
        return cartRepository.findAll();
    }

    // qty incr
    public Cart incrementQuantity(Integer id) {
        Cart item = cartRepository.findById(id).orElse(null);
        if (item != null) {
            item.setQuantity(item.getQuantity() + 1);
            return cartRepository.save(item);
        }
        return null;
    }

    // qty decr
    public Cart decreamentQuantity(Integer id) {
        Cart item = cartRepository.findById(id).orElse(null);
        if (item != null && item.getQuantity() > 1) {
            item.setQuantity(item.getQuantity() - 1);
            return cartRepository.save(item);
        } else if (item != null && item.getQuantity() == 1) {
            cartRepository.delete(item);
        }
        return null;
    }

    // remove from cart
    public String removeItem(Integer id) {
        cartRepository.deleteById(id);
        return "item removed from cart";
    }

    //grand total amount calculation
    public double getTotalAmount()
    {
    return cartRepository.findAll()
    .stream()
    .mapToDouble(item->item.getPrice()*item.getQuantity())
    .sum();
    }
    // clear cart
    public String clearCart() {
        cartRepository.deleteAll();
        return "cart cleared";
    }

}
