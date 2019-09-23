package com.jinhuifeng.service.Impl;

import com.jinhuifeng.dao.CompanyInformationDao;
import com.jinhuifeng.model.CompanyInformationTable;
import com.jinhuifeng.service.CompanyInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class CompanyInformationServiceImpl implements CompanyInformationService {

    @Autowired
    private CompanyInformationDao companyInformationDao;

    @Override
    public int insertCompany(CompanyInformationTable companyInformationTable) {
        Timestamp timesTamp = new Timestamp(new Date().getTime());
        companyInformationTable.setCreateDate(timesTamp);
        int insertResult=companyInformationDao.insertSelective(companyInformationTable);
        return insertResult;
    }

    @Override
    public int updateById(CompanyInformationTable companyInformationTable) {
        Timestamp timesTamp = new Timestamp(new Date().getTime());
        companyInformationTable.setCreateDate(timesTamp);
        int updateResult=companyInformationDao.updateById(companyInformationTable);
        return updateResult;
    }

    @Override
    public int deleteById(int id) {
        int deleteResult=companyInformationDao.deleteById(id);
        return deleteResult;
    }

    @Override
    public List<CompanyInformationTable> findAll(){
        List<CompanyInformationTable> companyInformationList=companyInformationDao.findAll();
        return companyInformationList;
    }

    @Override
    public List<CompanyInformationTable> findByName(String accountManager) {
        List<CompanyInformationTable> companyInformationList=companyInformationDao.findByName(accountManager);
        return companyInformationList;
    }

    @Override
    public CompanyInformationTable findById(int id) {
        CompanyInformationTable companyInformationaObj =companyInformationDao.findById(id);
        return companyInformationaObj;
    }
}
