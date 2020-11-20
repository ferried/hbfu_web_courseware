package cn.edu.hbfu.server.service;

import cn.edu.hbfu.server.db.PersonDB;
import cn.edu.hbfu.server.entity.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonService {
    @Autowired
    PersonDB personDB;

    public void addPerson(Person p) {
        personDB.getDatas().add(p);
    }

    public Person findById(Integer id) {
        Person p = null;
        List<Person> datas = personDB.getDatas();
        for (Person data : datas) {
            if (id == data.getId()) {
                p = data;
            }
        }
        return p;
    }

    public List<Person> findAll() {
        return personDB.getDatas();
    }

    public void delete(Integer id) {
        List<Person> persons = personDB.getDatas().stream().filter((p) -> !p.getId().equals(id)).collect(Collectors.toList());
        personDB.setDatas(persons);
    }

    public void update(Person p) {
        delete(p.getId());
        addPerson(p);
    }
}
