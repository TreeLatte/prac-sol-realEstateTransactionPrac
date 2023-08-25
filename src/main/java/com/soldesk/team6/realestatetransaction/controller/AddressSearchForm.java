package com.soldesk.team6.realestatetransaction.controller;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter @Setter
public class AddressSearchForm {

    @NotEmpty(message = "주소 입력은 필수 입니다")
    private String address;

}
