package com.jinhuifeng.test;

import com.jinhuifeng.model.CompanyInformationTable;
import com.jinhuifeng.model.PersonalInformationTable;
import com.jinhuifeng.service.CompanyInformationService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;
import java.util.List;

@RunWith(value = SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath*:applicationContext.xml")
public class CompanyInformationTest {

    @Autowired
    private CompanyInformationService companyInformationService;

    CompanyInformationTable companyInformationTable=new CompanyInformationTable();

    @Test
    public void findAllTest(){
        List<CompanyInformationTable> companyList=companyInformationService.findAll();
        for(CompanyInformationTable list:companyList){
            System.out.println(list);
//            Date a=list.getCreateDate();
//            long time = a.getTime();
//            Date b=new java.sql.Date(time);
//            System.out.println(list.getCreateDate());
//            System.out.println(new java.sql.Date(time));

        }

    }

    @Test
    public void daleteTest(){
        int res=companyInformationService.deleteById(3);
        System.out.println(res);
    }
}
