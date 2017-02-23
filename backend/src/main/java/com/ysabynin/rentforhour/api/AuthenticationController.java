package com.ysabynin.rentforhour.api;

import com.ysabynin.rentforhour.domain.Apartment;
import com.ysabynin.rentforhour.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;


@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    ApartmentRepository apartmentRepository;

    @RequestMapping("/authenticate/me")
    public Principal user(Principal principal){
        return principal;
    }

    @CrossOrigin()
    @RequestMapping("/apartments")
    public List<Apartment> getAllApartments(){
        return apartmentRepository.findAll();
    }
}
