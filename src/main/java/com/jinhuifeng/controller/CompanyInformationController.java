package com.jinhuifeng.controller;

import com.jinhuifeng.service.CompanyInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/companyInformation")
public class CompanyInformationController {

    @Autowired
    private CompanyInformationService companyInformationService;
}
