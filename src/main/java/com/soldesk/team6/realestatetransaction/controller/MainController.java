package com.soldesk.team6.realestatetransaction.controller;

import com.soldesk.team6.realestatetransaction.domain.Transaction;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@Slf4j
public class MainController {

    @RequestMapping("/")
    public String main(Model model){
        log.info("index controller");
        model.addAttribute("AddressSearchForm", new AddressSearchForm());
        model.addAttribute("transactions", new ArrayList<>());
        return "mainpage";
    }
}
