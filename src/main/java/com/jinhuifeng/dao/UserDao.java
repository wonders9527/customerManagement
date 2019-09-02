package com.jinhuifeng.dao;

import com.jinhuifeng.model.UserTable;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserDao {

    List<UserTable> findAll();

    UserTable findById(int id);

    int updateById(UserTable userTable);

    UserTable queryLogin(@Param("userName")String userName, @Param("password")String password);

    int deleteById(int id);

    int insert(UserTable userTable);


}
