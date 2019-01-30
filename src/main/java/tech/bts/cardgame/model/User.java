package tech.bts.cardgame.model;

public class User {

    private String name;
    private String password;

    public User() {
        // Needed to POST in Spring Boot
    }

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }
}
