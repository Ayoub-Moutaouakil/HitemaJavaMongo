package sakila.web.mongo.services;

import java.util.List;

import sakila.web.mongo.model.ProductModel;

public interface ProductService {
    
    List<ProductModel> getAllProduct();

    ProductModel createProduct(ProductModel product);

    void deleteProduct(String productId);
}
