package sakila.web.mongo.services;

import java.util.List;

import sakila.web.mongo.model.UserModel;

public interface UserService {
    
    List<UserModel> getAllUser();
    
    UserModel createUser(UserModel user);

    void deleteUser(String userId);

}