package com.jinhuifeng.service.Impl;

import com.jinhuifeng.dao.CompanyInformationDao;
import com.jinhuifeng.model.CompanyInformationTable;
import com.jinhuifeng.service.CompanyInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyInformationServiceImpl implements CompanyInformationService {

    @Autowired
    private CompanyInformationDao companyInformationDao;


    @Override
    public int insertSelective(CompanyInformationTable companyInformationTable) {
        int insertResult=companyInformationDao.insertSelective(companyInformationTable);
        return insertResult;
    }

    @Override
    public int deleteById(int id) {
        int deleteResult=companyInformationDao.deleteById(id);
        return deleteResult;
    }

    @Override
    public List<CompanyInformationTable> findAll() {
        List<CompanyInformationTable> companyInformationList =companyInformationDao.findAll();
        return companyInformationList;
    }

    @Override
    public CompanyInformationTable findById(int id) {
        CompanyInformationTable companyInformationaObj =companyInformationDao.findById(id);
        return companyInformationaObj;
    }
}
