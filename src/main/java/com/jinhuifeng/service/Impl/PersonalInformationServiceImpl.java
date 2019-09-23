package com.jinhuifeng.service.Impl;

import com.jinhuifeng.dao.PersonalInformationDao;
import com.jinhuifeng.model.PersonalInformationTable;
import com.jinhuifeng.service.PersonalInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class PersonalInformationServiceImpl implements PersonalInformationService {

    @Autowired
    private PersonalInformationDao personalInformationDao;

    @Override
    public int insertPersonal(PersonalInformationTable personalInformationTable) {
        Timestamp timesTamp = new Timestamp(new Date().getTime());
        personalInformationTable.setCreateDate(timesTamp);
        int personalResult=personalInformationDao.insertSelective(personalInformationTable);
        return personalResult;
    }

    @Override
    public int updateById(PersonalInformationTable personalInformationTable) {
        Timestamp timesTamp = new Timestamp(new Date().getTime());
        personalInformationTable.setCreateDate(timesTamp);
        int personalResult=personalInformationDao.updateById(personalInformationTable);
        return personalResult;
    }

    @Override
    public List<PersonalInformationTable> findAll() {
        List<PersonalInformationTable> personalInformationList=personalInformationDao.findAll();
        return personalInformationList;
    }

    @Override
    public PersonalInformationTable findById(int id) {
        PersonalInformationTable personalInformation=personalInformationDao.findById(id);
        return personalInformation;
    }

    @Override
    public List<PersonalInformationTable> findByName(String accountManager) {
        List<PersonalInformationTable> personalInformationList=personalInformationDao.findByName(accountManager);
        return personalInformationList;
    }

    @Override
    public int deleteById(int id) {
        int deleteResult=personalInformationDao.deleteById(id);
        return deleteResult;
    }

}
