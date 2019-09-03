package com.jinhuifeng.service;

import com.jinhuifeng.model.CompanyInformationTable;

import java.util.List;

public interface CompanyInformationService {

    int insertSelective(CompanyInformationTable companyInformationTable);

    int deleteById(int id);

    List<CompanyInformationTable> findAll();

    CompanyInformationTable findById(int id);
}