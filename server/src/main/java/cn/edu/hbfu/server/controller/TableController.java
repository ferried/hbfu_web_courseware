package cn.edu.hbfu.server.controller;

import cn.edu.hbfu.server.db.PersonDB;
import cn.edu.hbfu.server.entity.Person;
import cn.edu.hbfu.server.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/table")
public class TableController {

    @Autowired
    PersonService p;

    @GetMapping("/index/{talk}")
    public Map index(@PathVariable("talk") String talk) {
        Map<String, String> response = new HashMap<>();
        System.out.println(talk);
        response.put("talk", talk);
        return response;
    }

    @GetMapping("/findall")
    public Map findall() {
        Map<String, List<Person>> res = new HashMap<>();
        res.put("msg", p.findAll());
        return res;
    }

    @PostMapping("/addperson")
    public Map add(@RequestBody Person person) {
        Map<String, String> res = new HashMap();
        try {
            p.addPerson(person);
            res.put("msg", "成功");
        } catch (Exception e) {
            res.put("msg", "失败");
            e.printStackTrace();
        }
        return res;
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") Integer id) {
        p.delete(id);
    }
}
