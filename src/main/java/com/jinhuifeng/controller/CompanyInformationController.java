package com.jinhuifeng.controller;

import com.jinhuifeng.model.CompanyInformationTable;
import com.jinhuifeng.service.CompanyInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
@RequestMapping("/companyInformation")
public class CompanyInformationController {

    @Autowired
    private CompanyInformationService companyInformationService;

    @ResponseBody
    @RequestMapping("/insertCompany")
    public int insertCompany(@RequestBody CompanyInformationTable companyInformationTable){
        int res=companyInformationService.insertCompany(companyInformationTable);
        return  res;
    }

    @ResponseBody
    @RequestMapping("/findByName")
    public List<CompanyInformationTable> findByName(@RequestParam("accountManager")String accountManager){
        List<CompanyInformationTable> companyList=companyInformationService.findByName(accountManager);
        return  companyList;
    }

    @ResponseBody
    @RequestMapping("/findAll")
    public List<CompanyInformationTable> findAll(){
        List<CompanyInformationTable> companyList=companyInformationService.findAll();
        return  companyList;
    }

    @ResponseBody
    @RequestMapping("/deleteById")
    public int deleteById(@RequestParam("id")int id){
        int res=companyInformationService.deleteById(id);
        return  res;
    }

    @ResponseBody
    @RequestMapping("/findCompanyById")
    public CompanyInformationTable findCompanyById(@RequestParam("id")int id){
        CompanyInformationTable companyObj=companyInformationService.findById(id);
        return  companyObj;
    }

    @ResponseBody
    @RequestMapping("/updateById")
    public int updateById(@RequestBody CompanyInformationTable companyInformationTable) {
        int updateResult=companyInformationService.updateById(companyInformationTable);
        return updateResult;
    }
}
