package cn.edu.hbfu.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/table")
public class TableController {

    @GetMapping("/index/{talk}")
    public Map index(@PathVariable("talk") String talk) {
        Map<String, String> response = new HashMap<>();
        System.out.println(talk);
        response.put("talk",talk);
        return response;
    }
}
