package com.mathijsblok.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class DataResources {

    @GetMapping("data")
    public List<Map<String, Object>> user() {
        List<Map<String, Object>> data = new ArrayList<>();

        data.add(createData("1"));
        data.add(createData("2"));
        data.add(createData("3"));
        data.add(createData("4"));

        return data;
    }

    private Map<String, Object> createData(String index){
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("data1", "DATA" + index);
        map.put("data2", "DATA" + index);
        return map;
    }
}
