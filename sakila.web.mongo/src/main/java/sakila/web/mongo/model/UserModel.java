package sakila.web.mongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserModel {
    @Id
    private String id;

    private String lname;
    private String fname;
    private String alias;
    private String email;
    private boolean activation;
    private String password;

    public UserModel() {

    }

    public UserModel(String lname, String fname, String alias, String email, boolean activation, String password) {
        this.lname = lname;
        this.fname = fname;
        this.alias = alias;
        this.email = email;
        this.activation = activation;
        this.password = password;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActivation() {
        return activation;
    }

    public void setActivation(boolean activation) {
        this.activation = activation;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}