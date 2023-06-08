package sakila.web.mongo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import sakila.web.mongo.model.ProductModel;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel,String> {
    
}