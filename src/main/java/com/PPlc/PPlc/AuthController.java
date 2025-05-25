package com.PPlc.PPlc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");
        return authService.authenticate(email, password)
                .map(user -> {
                    Map<String, Object> res = new HashMap<>();
                    res.put("success", true);
                    res.put("token", "dummy-token"); // Remplacer par un vrai JWT si besoin
                    return res;
                })
                .orElseGet(() -> {
                    Map<String, Object> res = new HashMap<>();
                    res.put("success", false);
                    return res;
                });
    }

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody Map<String, String> registerData) {
        Map<String, Object> res = new HashMap<>();
        String email = registerData.get("email");
        String password = registerData.get("password");
        if (email == null || password == null) {
            res.put("success", false);
            res.put("message", "Email et mot de passe requis.");
            return res;
        }
        if (authService.getUserRepository().findByUsername(email).isPresent()) {
            res.put("success", false);
            res.put("message", "Cet email existe déjà.");
            return res;
        }
        User user = new User();
        user.setUsername(email);
        user.setPassword(passwordEncoder.encode(password));
        authService.getUserRepository().save(user);
        res.put("success", true);
        return res;
    }
} 