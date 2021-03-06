package com.jinhuifeng.service;

import com.jinhuifeng.model.CompanyInformationTable;

import java.util.List;

public interface CompanyInformationService {

    int insertCompany(CompanyInformationTable companyInformationTable);

    int updateById(CompanyInformationTable companyInformationTable);

    int deleteById(int id);

    List<CompanyInformationTable> findAll();

    List<CompanyInformationTable> findByName(String accountManager);

    CompanyInformationTable findById(int id);
}
