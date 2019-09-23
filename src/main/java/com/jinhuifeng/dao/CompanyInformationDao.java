package com.jinhuifeng.dao;

import com.jinhuifeng.model.CompanyInformationTable;

import java.util.List;

public interface CompanyInformationDao {

    int insertSelective(CompanyInformationTable companyInformationTable);

    int updateById(CompanyInformationTable companyInformationTable);

    int deleteById(int id);

    List<CompanyInformationTable> findAll();

    List<CompanyInformationTable> findByName(String accountManager);

    CompanyInformationTable findById(int id);
}
