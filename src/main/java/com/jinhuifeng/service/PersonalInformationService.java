package com.jinhuifeng.service;

import com.jinhuifeng.model.PersonalInformationTable;

import java.util.List;

public interface PersonalInformationService {

    int insertPersonal(PersonalInformationTable personalInformationTable);

    List<PersonalInformationTable> findAll();

    PersonalInformationTable findById(int id);

    int deleteById(int id);
}
