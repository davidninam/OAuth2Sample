package com.mathijsblok.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;


@RestController
@RequestMapping("/api")
public class UserResource {

    @GetMapping({ "/user", "/me" })
    public Map<String, Object> user(Principal principal) {
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("name", principal.getName());
        map.put("authenticated", true);
        return map;
    }
}
