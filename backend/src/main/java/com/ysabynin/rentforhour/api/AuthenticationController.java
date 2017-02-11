package com.ysabynin.rentforhour.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by ysabynin on 11.02.2017.
 */

@RestController
public class AuthenticationController {

    @RequestMapping("/authenticate/me")
    public Principal user(Principal principal){
        return principal;
    }
}
