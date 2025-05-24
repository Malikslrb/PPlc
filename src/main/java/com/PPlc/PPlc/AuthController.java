package com.PPlc.PPlc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");
        return authService.authenticate(username, password)
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
} 