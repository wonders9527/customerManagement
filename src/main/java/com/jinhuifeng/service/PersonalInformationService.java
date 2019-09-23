package com.jinhuifeng.service;

import com.jinhuifeng.model.PersonalInformationTable;

import java.util.List;

public interface PersonalInformationService {

    int insertPersonal(PersonalInformationTable personalInformationTable);

    int updateById(PersonalInformationTable personalInformationTable);

    List<PersonalInformationTable> findAll();

    PersonalInformationTable findById(int id);

    List<PersonalInformationTable> findByName(String accountManager);

    int deleteById(int id);
}
