package sakila.web.mongo.services;

import lombok.extern.slf4j.Slf4j;
import sakila.web.mongo.model.UserModel;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
    @Slf4j
class UserServiceImplTest {

    @Autowired
    UserService service;

    @Test
    void create() {
        //UserModel user = new UserModel(null, "Marine","TESTS");
        //service.create(user);
        //log.trace("{}",user);
    }

    @Test
    void read() {
    }

    @Test
    void readAll() {
        service.getAllUser().forEach(u->log.trace("{}",u));
    }
}