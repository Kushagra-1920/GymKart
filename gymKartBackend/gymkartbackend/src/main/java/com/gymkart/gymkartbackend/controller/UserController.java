package com.gymkart.gymkartbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gymkart.gymkartbackend.entity.User;
import com.gymkart.gymkartbackend.repository.UserRepo;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepo userRepo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // register
    @PostMapping("/register")

    public String register(@RequestBody User user) {
        User existingUser = userRepo.findByEmail(user.getEmail());
        if (existingUser != null) {
            return "email already exists";
        }
        user.setPassword(encoder.encode(user.getPassword()));
        userRepo.save(user);
        return "user registered successfully";
    }
    // login

    // creating session
    @PostMapping("/login")
    public String login(@RequestBody User reqUser, HttpServletRequest request) {
        User dbUser = userRepo.findByEmail(reqUser.getEmail());
        if (dbUser == null) {
            return "user not found";
        }
        boolean matches = encoder.matches(reqUser.getPassword(), dbUser.getPassword());
        if (!matches) {
            return "wrong password";
        } else {
            // session create
            HttpSession session = request.getSession(true);
            session.setAttribute("userEmail", dbUser.getEmail());
            session.setAttribute("userID", dbUser.getId());
            return "Login successful";
        }

    }

    // check current login user (return email or null)
    @GetMapping("/currentUser")
    public Object currentUser(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null)
            return null;

        return session.getAttribute("userEmail");
    }

    // logout - invalidate session and clear cookie
    @PostMapping("/Logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        // clear cookie
        Cookie cookie = new Cookie("JSESSIONID", null);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return "Successfully logged out";
    }

}

// login
