package sakila.web.mongo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import sakila.web.mongo.model.UserModel;
import sakila.web.mongo.services.UserService;

@RestController
@CrossOrigin
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<UserModel>> getAllUser() {
        return ResponseEntity.ok().body(userService.getAllUser());
    }

    @PostMapping("/users")
    public ResponseEntity<UserModel> createUser(@RequestBody UserModel user) {
        return ResponseEntity.ok().body(this.userService.createUser(user));
    }

    @DeleteMapping("/users/{id}")
    public HttpStatus deleteUser(@PathVariable String id) {
        this.userService.deleteUser(id);
        return HttpStatus.OK;
    }
}
