package sakila.web.mongo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class ProductModel {
    @Id
    private String id;

    private String name;
    private String code;
    private String desc;
    private String image;
    private List<String> categories;
    private double price;

    public ProductModel() {

    }

    public ProductModel(String name, String code, String desc, String image, List<String> categories, double price) {
        this.name = name;
        this.code = code;
        this.desc = desc;
        this.categories = categories;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
