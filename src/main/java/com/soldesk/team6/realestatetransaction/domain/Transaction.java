package com.soldesk.team6.realestatetransaction.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "DealAmount")
    private String dealAmount;

    @Column(name = "REQGBN")
    private String reqgbn;

    @Column(name = "BuildYear")
    private String buildYear;

    @Column(name = "DealYear")
    private String dealYear;

    @Column(name = "RegistrationDate")
    private String registrationDate;

    @Column(name = "Dong")
    private String dong;

    @Column(name = "ApartmentName")
    private String apartmentName;

    @Column(name = "DealMonth")
    private String dealMonth;

    @Column(name = "DealDay")
    private String dealDay;

    @Column(name = "AreaforExclusiveUse")
    private String areaforExclusiveUse;

    @Column(name = "RdealerLawdnm")
    private String rdealerLawdnm;

    @Column(name = "Jibun")
    private String jibun;

    @Column(name = "RegionalCode")
    private String regionalCode;

    @Column(name = "Floor")
    private String floor;

    @Column(name = "CancelDealDay")
    private String cancelDealDay;

    @Column(name = "CancelDealType")
    private String cancelDealType;


}
