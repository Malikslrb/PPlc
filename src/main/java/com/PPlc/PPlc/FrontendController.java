package com.PPlc.PPlc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {
    @GetMapping(value = {"/", "/{path:[^\\.]*}"})
    public String forward() {
        return "forward:/login.html";
    }
} 