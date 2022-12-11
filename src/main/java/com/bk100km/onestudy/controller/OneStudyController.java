package com.bk100km.onestudy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OneStudyController {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, chanho!";
    }
}
