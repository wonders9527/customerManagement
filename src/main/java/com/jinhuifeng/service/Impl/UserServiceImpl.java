package com.jinhuifeng.service.Impl;

import com.jinhuifeng.dao.UserDao;
import com.jinhuifeng.model.UserTable;
import com.jinhuifeng.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public List<UserTable> findAll() {
        List<UserTable> userList=userDao.findAll();
        return userList;
    }

    @Override
    public UserTable queryLogin(String userName, String password) {
        UserTable userList=userDao.queryLogin(userName,password);
        return userList;
    }

    @Override
    public UserTable findById(int id) {
        UserTable userList=userDao.findById(id);
        return userList;
    }

    @Override
    public int updateById(UserTable userTable) {
        UserTable userObj=userDao.findById(userTable.getId());
        userTable.setPassword(userObj.getPassword());
        int userResult= userDao.updateById(userTable);
        return userResult;
    }

    @Override
    public int deleteById(int id) {
        int deleteResult= userDao.deleteById(id);
        return deleteResult;
    }

    @Override
    public int saveAccount(UserTable userTable) {
        int saveResult= userDao.insert(userTable);
        return saveResult;
    }
}
