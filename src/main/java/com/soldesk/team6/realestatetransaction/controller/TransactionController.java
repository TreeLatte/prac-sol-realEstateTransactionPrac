package com.soldesk.team6.realestatetransaction.controller;

import com.soldesk.team6.realestatetransaction.domain.Transaction;
import com.soldesk.team6.realestatetransaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionService transactionService;

    @PostMapping("/transactions/search")
    public String find(@Valid AddressSearchForm form, BindingResult result, Model model) {

        if (result.hasErrors()) {
            return "mainpage";
        }

        List<Transaction> transactions = transactionService.findTransactions(form.getAddress());
        model.addAttribute("AddressSearchForm", form);
        model.addAttribute("transactions", transactions);
        return "mainpage";
    }

}
