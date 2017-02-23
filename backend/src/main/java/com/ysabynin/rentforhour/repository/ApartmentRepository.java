package com.ysabynin.rentforhour.repository;

import com.ysabynin.rentforhour.domain.Apartment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ysabynin on 19.02.2017.
 */
public interface ApartmentRepository extends MongoRepository<Apartment, String> {
    List<Apartment> findAll();
}

