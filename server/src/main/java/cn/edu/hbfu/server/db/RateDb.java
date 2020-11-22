package cn.edu.hbfu.server.db;

import org.springframework.context.annotation.Configuration;

@Configuration
public class RateDb {

    Double rateNum = 5.5;

    // huoqu
    public Double getRateNum() {
        return this.rateNum;
    }

    // set
    public void setRateNum(Double rate) {
        this.rateNum = rate;
    }
}
