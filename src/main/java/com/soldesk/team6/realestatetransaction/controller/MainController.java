package com.soldesk.team6.realestatetransaction.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
public class MainController {

    @RequestMapping("/")
    public String main(){
        log.info("index controller");
        return "mainpage";
    }
}
