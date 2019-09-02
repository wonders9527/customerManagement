package com.jinhuifeng.test;

import com.jinhuifeng.model.PersonalInformationTable;
import com.jinhuifeng.service.PersonalInformationService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;
import java.util.List;

@RunWith(value = SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath*:applicationContext.xml")
public class PersonalInformationTest {

    @Autowired
    private PersonalInformationService personalInformationService;

    PersonalInformationTable personalInformationTable=new PersonalInformationTable();

    @Test
    public void findAllTest(){
        List<PersonalInformationTable> personalList=personalInformationService.findAll();
        for(PersonalInformationTable list:personalList){
            Date a=list.getCreateDate();
            long time = a.getTime();
            Date b=new java.sql.Date(time);
            System.out.println(list.getCreateDate());
            System.out.println(new java.sql.Date(time));

        }

    }
}
