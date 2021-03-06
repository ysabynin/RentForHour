package com.ysabynin.rentforhour.api;

import com.ysabynin.rentforhour.domain.Apartment;
import com.ysabynin.rentforhour.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    ApartmentRepository apartmentRepository;

    @RequestMapping("/authenticate/me")
    public Principal user(Principal principal){
        return principal;
    }

    @RequestMapping("/apartments")
    public List<Apartment> getAllApartments(){
        return apartmentRepository.findAll();
    }

    @RequestMapping("/apartments/{id}")
    public Apartment getApartemntDetails(@PathVariable String id){
        return apartmentRepository.findById(id);
    }
}
