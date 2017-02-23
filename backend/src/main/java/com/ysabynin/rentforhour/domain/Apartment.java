package com.ysabynin.rentforhour.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by ysabynin on 19.02.2017.
 */
@Document(collection = "apartments")
public class Apartment {
    @Id
    private String id;

    private String name;
    private String phoneNumber;
    private double cost;
    private String adress;

    public Apartment() {
    }

    public Apartment(String id, String name, String phoneNumber, double cost, String adress) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.cost = cost;
        this.adress = adress;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }


}
