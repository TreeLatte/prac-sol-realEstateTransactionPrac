package com.soldesk.team6.realestatetransaction.service;

import com.soldesk.team6.realestatetransaction.domain.Transaction;
import com.soldesk.team6.realestatetransaction.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public List<Transaction> findTransactions(String address) { return transactionRepository.find(address); }
}
