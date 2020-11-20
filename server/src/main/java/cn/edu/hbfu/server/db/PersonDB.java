package cn.edu.hbfu.server.db;

import cn.edu.hbfu.server.entity.Person;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class PersonDB {
    List<Person> datas = new ArrayList<>();

    public PersonDB() {
        Person p1 = new Person(1, "小红", 18);
        Person p2 = new Person(2, "小黄", 19);
        Person p3 = new Person(3, "小绿", 20);
        Person p4 = new Person(4, "小蓝", 21);
        Person p5 = new Person(5, "小紫", 22);
        datas.add(p1);
        datas.add(p2);
        datas.add(p3);
        datas.add(p4);
        datas.add(p5);
    }

    public List<Person> getDatas() {
        return datas;
    }

    public void setDatas(List<Person> datas) {
        this.datas = datas;
    }
}
