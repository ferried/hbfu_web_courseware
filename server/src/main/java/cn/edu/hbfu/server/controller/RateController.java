package cn.edu.hbfu.server.controller;

import cn.edu.hbfu.server.db.RateDb;
import cn.edu.hbfu.server.entity.Rate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/rate")
public class RateController {

    @Autowired
    RateDb rateDb;

    @GetMapping("/queryRateNum")
    public Map<String, Double> queryRateNum() {
        Map<String, Double> response = new HashMap<>();
        response.put("msg", rateDb.getRateNum());
        return response;
    }

    @PostMapping("/setRateNum")
    public void setRateNum(@RequestBody Rate rate) {
        rateDb.setRateNum(rate.getNum());
    }
}
