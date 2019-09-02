package com.jinhuifeng.test;

import com.jinhuifeng.model.UserTable;
import com.jinhuifeng.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(value = SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath*:applicationContext.xml")
public class UserTest {

    @Autowired
    private UserService userService;

    UserTable userTable=new UserTable();

    @Test
    public void findAllUserTest(){
        List<UserTable> userList=userService.findAll();
        System.out.println(userList);
    }


    @Test
    public void queryLoginTest(){
        UserTable userList=userService.queryLogin("admin","123456");
        System.out.println(userList);
    }


    @Test
    public void updateTest(){
        //UserTable userObj=userService.findById(1);
        UserTable userObj=new UserTable();
        userObj.setId(1);
        userObj.setEmployeeName("张三");
        userObj.setEmployeeNumber("2019");
        userObj.setUserName("admin");
        userObj.setWorkStatus("1");
        userObj.setUserType("1");
        int userList=userService.updateById(userObj);
        System.out.println(userList);
    }

    @Test
    public void findByIdTest(){
        //userTable.setId(1);
        UserTable userList=userService.findById(1);
        System.out.println(userList);
    }
}
