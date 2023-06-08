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

import sakila.web.mongo.model.ProductModel;
import sakila.web.mongo.services.ProductService;

@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<ProductModel>> getAllProduct() {
        return ResponseEntity.ok().body(productService.getAllProduct());
    }

    @PostMapping("/products")
    public ResponseEntity<ProductModel> createProduct(@RequestBody ProductModel product) {
        return ResponseEntity.ok().body(this.productService.createProduct(product));
    }

    @DeleteMapping("/products/{id}")
    public HttpStatus deleteProduct(@PathVariable String id) {
        this.productService.deleteProduct(id);
        return HttpStatus.OK;
    }
}