package sakila.web.mongo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import sakila.web.mongo.model.ProductModel;
import sakila.web.mongo.repositories.ProductRepository;

@Service
    @Slf4j
        @AllArgsConstructor

public class ProductServiceImpl implements ProductService{

    private ProductRepository productRepository;

    @Override
    public List<ProductModel> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public ProductModel createProduct(ProductModel product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(String productId) {
        Optional<ProductModel> productDb = this.productRepository.findById(productId);

        if (productDb.isPresent()) {
            this.productRepository.delete(productDb.get());
        } else {
            System.out.println("Erreur, ce produit n'existe pas");
        }
    }
    
}
