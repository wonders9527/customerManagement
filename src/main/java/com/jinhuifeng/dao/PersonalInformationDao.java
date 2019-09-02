package com.jinhuifeng.dao;

import com.jinhuifeng.model.PersonalInformationTable;

import java.util.List;

public interface PersonalInformationDao {

    int insertSelective(PersonalInformationTable personalInformationTable);

    List<PersonalInformationTable> findAll();

    PersonalInformationTable findById(int id);

    int deleteById(int id);
}
