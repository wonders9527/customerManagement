package com.jinhuifeng.controller;

import com.jinhuifeng.model.PersonalInformationTable;
import com.jinhuifeng.service.PersonalInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/personalInformation")
public class PersonalInformationController {

    @Autowired
    private PersonalInformationService personalInformationService;

    @ResponseBody
    @RequestMapping("/insertPersonal")
    public int insertPersonal(@RequestBody PersonalInformationTable personalInformationTable){
        int res=personalInformationService.insertPersonal(personalInformationTable);
        return  res;
    }

    @ResponseBody
    @RequestMapping("/updateById")
    public int updateById(@RequestBody PersonalInformationTable personalInformationTable){
        int res=personalInformationService.updateById(personalInformationTable);
        return  res;
    }

    @ResponseBody
    @RequestMapping("/findAll")
    public List<PersonalInformationTable> findAll(){
        List<PersonalInformationTable> personalList=personalInformationService.findAll();
        return  personalList;
    }

    @ResponseBody
    @RequestMapping("/findPersonalById")
    public PersonalInformationTable findPersonalById(@RequestParam("id")int id){
        PersonalInformationTable personalList=personalInformationService.findById(id);
        return  personalList;
    }

    @ResponseBody
    @RequestMapping("/findByName")
    public List<PersonalInformationTable> findByName(@RequestParam("accountManager")String accountManager){
        List<PersonalInformationTable> personalList=personalInformationService.findByName(accountManager);
        return  personalList;
    }

    @ResponseBody
    @RequestMapping("/deleteById")
    public int deleteById(@RequestParam("id")int id){
        int res=personalInformationService.deleteById(id);
        return  res;
    }
}
