package com.back.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity // Class is DB
@Data  // Does getters setters
public class Client {

    @Id
    @GeneratedValue // Not needed, will auto_increment
    private int clientID;
    private String firstName;
    private String lastName;
    private String email;

}
