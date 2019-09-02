package com.jinhuifeng.service;

import com.jinhuifeng.model.UserTable;

import java.util.List;


/**
 * 类描述信息
 * 业务接口
 * @author guanpeng
 * @ClassName UserService
 * @Description: TODO
 * @date 2019
 * @Viersion V1.0.1
 */

public interface UserService {

    List<UserTable> findAll();

    UserTable queryLogin(String userName,String password);

    UserTable findById(int id);

    int updateById(UserTable userTable);

    int deleteById(int id);

    int saveAccount(UserTable userTable);
}
