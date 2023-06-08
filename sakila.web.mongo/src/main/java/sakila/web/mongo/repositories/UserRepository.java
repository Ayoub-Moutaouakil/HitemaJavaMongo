package sakila.web.mongo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import sakila.web.mongo.model.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel,String> {
    
}
