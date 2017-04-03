package com.mathijsblok.resources;

import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserResources {

    @GetMapping("/user")
    public Map<String, Object> user(OAuth2Authentication principal) {
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("id", principal.getName());
        map.put("authenticated", principal.getUserAuthentication().isAuthenticated());
        map.put("credentials", principal.getUserAuthentication().getDetails());
        return map;
    }
}
