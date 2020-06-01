package com.jinhuifeng.model;

import java.util.Date;

public class CompanyInformationTable {

    @Override
    public String toString() {
        return "CompanyInformationTable{" +
                "id=" + id +
                ", applicationAmount=" + applicationAmount +
                ", maximumMonthlyPayment=" + maximumMonthlyPayment +
                ", loanUse='" + loanUse + '\'' +
                ", loanWay='" + loanWay + '\'' +
                ", companyName='" + companyName + '\'' +
                ", companyCreditcode='" + companyCreditcode + '\'' +
                ", companyOrganization='" + companyOrganization + '\'' +
                ", companyEstablishDate=" + companyEstablishDate +
                ", companyRegisteredCapital=" + companyRegisteredCapital +
                ", companyPaidinCapital=" + companyPaidinCapital +
                ", investmentStatus='" + investmentStatus + '\'' +
                ", investmentStandard='" + investmentStandard + '\'' +
                ", shareholdersNumber=" + shareholdersNumber +
                ", actualController='" + actualController + '\'' +
                ", actualControllerChange='" + actualControllerChange + '\'' +
                ", equityPledgeStatus='" + equityPledgeStatus + '\'' +
                ", equityFreezeStatus='" + equityFreezeStatus + '\'' +
                ", businessScope='" + businessScope + '\'' +
                ", mainBusiness='" + mainBusiness + '\'' +
                ", mainBusinessChange='" + mainBusinessChange + '\'' +
                ", mainBusinessDispersion='" + mainBusinessDispersion + '\'' +
                ", businessPlace='" + businessPlace + '\'' +
                ", businessPlaceWay='" + businessPlaceWay + '\'' +
                ", previousMainBusiness=" + previousMainBusiness +
                ", previousNetprofit=" + previousNetprofit +
                ", previousTotalassets=" + previousTotalassets +
                ", previousNetassets=" + previousNetassets +
                ", externalBorrowing='" + externalBorrowing + '\'' +
                ", guaranteeMethod='" + guaranteeMethod + '\'' +
                ", unresolvedDebtGuarantee='" + unresolvedDebtGuarantee + '\'' +
                ", taxDisputeStatus='" + taxDisputeStatus + '\'' +
                ", outstandingClaimStatus='" + outstandingClaimStatus + '\'' +
                ", qualityAssuranceStatus='" + qualityAssuranceStatus + '\'' +
                ", financialCommitmentStatus='" + financialCommitmentStatus + '\'' +
                ", balanceSheetStatus='" + balanceSheetStatus + '\'' +
                ", environmentalInspectionStatus='" + environmentalInspectionStatus + '\'' +
                ", fireInspectionStatus='" + fireInspectionStatus + '\'' +
                ", businessInspectionStatus='" + businessInspectionStatus + '\'' +
                ", arrearsTaxesStatus='" + arrearsTaxesStatus + '\'' +
                ", arbitrationLawStatus='" + arbitrationLawStatus + '\'' +
                ", entryPeople='" + entryPeople + '\'' +
                ", accountManager='" + accountManager + '\'' +
                ", createDate=" + createDate +
                ", temp1='" + temp1 + '\'' +
                ", temp2='" + temp2 + '\'' +
                '}';
    }

    private Integer id;

    private Double applicationAmount;

    private Double maximumMonthlyPayment;

    private String loanUse;

    private String loanWay;

    private String companyName;

    private String companyCreditcode;

    private String companyOrganization;

    private Date companyEstablishDate;

    private Double companyRegisteredCapital;

    private Double companyPaidinCapital;

    private String investmentStatus;

    private String investmentStandard;

    private Double shareholdersNumber;

    private String actualController;

    private String actualControllerChange;

    private String equityPledgeStatus;

    private String equityFreezeStatus;

    private String businessScope;

    private String mainBusiness;

    private String mainBusinessChange;

    private String mainBusinessDispersion;

    private String businessPlace;

    private String businessPlaceWay;

    private Double previousMainBusiness;

    private Double previousNetprofit;

    private Double previousTotalassets;

    private Double previousNetassets;

    private String externalBorrowing;

    private String guaranteeMethod;

    private String unresolvedDebtGuarantee;

    private String taxDisputeStatus;

    private String outstandingClaimStatus;

    private String qualityAssuranceStatus;

    private String financialCommitmentStatus;

    private String balanceSheetStatus;

    private String environmentalInspectionStatus;

    private String fireInspectionStatus;

    private String businessInspectionStatus;

    private String arrearsTaxesStatus;

    private String arbitrationLawStatus;

    private String entryPeople;

    private String accountManager;

    private Date createDate;

    private String temp1;

    private String temp2;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getApplicationAmount() {
        return applicationAmount;
    }

    public void setApplicationAmount(Double applicationAmount) {
        this.applicationAmount = applicationAmount;
    }

    public Double getMaximumMonthlyPayment() {
        return maximumMonthlyPayment;
    }

    public void setMaximumMonthlyPayment(Double maximumMonthlyPayment) {
        this.maximumMonthlyPayment = maximumMonthlyPayment;
    }

    public String getLoanUse() {
        return loanUse;
    }

    public void setLoanUse(String loanUse) {
        this.loanUse = loanUse == null ? null : loanUse.trim();
    }

    public String getLoanWay() {
        return loanWay;
    }

    public void setLoanWay(String loanWay) {
        this.loanWay = loanWay == null ? null : loanWay.trim();
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName == null ? null : companyName.trim();
    }

    public String getCompanyCreditcode() {
        return companyCreditcode;
    }

    public void setCompanyCreditcode(String companyCreditcode) {
        this.companyCreditcode = companyCreditcode == null ? null : companyCreditcode.trim();
    }

    public String getCompanyOrganization() {
        return companyOrganization;
    }

    public void setCompanyOrganization(String companyOrganization) {
        this.companyOrganization = companyOrganization == null ? null : companyOrganization.trim();
    }

    public Date getCompanyEstablishDate() {
        return companyEstablishDate;
    }

    public void setCompanyEstablishDate(Date companyEstablishDate) {
        this.companyEstablishDate = companyEstablishDate;
    }

    public Double getCompanyRegisteredCapital() {
        return companyRegisteredCapital;
    }

    public void setCompanyRegisteredCapital(Double companyRegisteredCapital) {
        this.companyRegisteredCapital = companyRegisteredCapital;
    }

    public Double getCompanyPaidinCapital() {
        return companyPaidinCapital;
    }

    public void setCompanyPaidinCapital(Double companyPaidinCapital) {
        this.companyPaidinCapital = companyPaidinCapital;
    }

    public String getInvestmentStatus() {
        return investmentStatus;
    }

    public void setInvestmentStatus(String investmentStatus) {
        this.investmentStatus = investmentStatus == null ? null : investmentStatus.trim();
    }

    public String getInvestmentStandard() {
        return investmentStandard;
    }

    public void setInvestmentStandard(String investmentStandard) {
        this.investmentStandard = investmentStandard == null ? null : investmentStandard.trim();
    }

    public Double getShareholdersNumber() {
        return shareholdersNumber;
    }

    public void setShareholdersNumber(Double shareholdersNumber) {
        this.shareholdersNumber = shareholdersNumber;
    }

    public String getActualController() {
        return actualController;
    }

    public void setActualController(String actualController) {
        this.actualController = actualController == null ? null : actualController.trim();
    }

    public String getActualControllerChange() {
        return actualControllerChange;
    }

    public void setActualControllerChange(String actualControllerChange) {
        this.actualControllerChange = actualControllerChange == null ? null : actualControllerChange.trim();
    }

    public String getEquityPledgeStatus() {
        return equityPledgeStatus;
    }

    public void setEquityPledgeStatus(String equityPledgeStatus) {
        this.equityPledgeStatus = equityPledgeStatus == null ? null : equityPledgeStatus.trim();
    }

    public String getEquityFreezeStatus() {
        return equityFreezeStatus;
    }

    public void setEquityFreezeStatus(String equityFreezeStatus) {
        this.equityFreezeStatus = equityFreezeStatus == null ? null : equityFreezeStatus.trim();
    }

    public String getBusinessScope() {
        return businessScope;
    }

    public void setBusinessScope(String businessScope) {
        this.businessScope = businessScope == null ? null : businessScope.trim();
    }

    public String getMainBusiness() {
        return mainBusiness;
    }

    public void setMainBusiness(String mainBusiness) {
        this.mainBusiness = mainBusiness == null ? null : mainBusiness.trim();
    }

    public String getMainBusinessChange() {
        return mainBusinessChange;
    }

    public void setMainBusinessChange(String mainBusinessChange) {
        this.mainBusinessChange = mainBusinessChange == null ? null : mainBusinessChange.trim();
    }

    public String getMainBusinessDispersion() {
        return mainBusinessDispersion;
    }

    public void setMainBusinessDispersion(String mainBusinessDispersion) {
        this.mainBusinessDispersion = mainBusinessDispersion == null ? null : mainBusinessDispersion.trim();
    }

    public String getBusinessPlace() {
        return businessPlace;
    }

    public void setBusinessPlace(String businessPlace) {
        this.businessPlace = businessPlace == null ? null : businessPlace.trim();
    }

    public String getBusinessPlaceWay() {
        return businessPlaceWay;
    }

    public void setBusinessPlaceWay(String businessPlaceWay) {
        this.businessPlaceWay = businessPlaceWay == null ? null : businessPlaceWay.trim();
    }

    public Double getPreviousMainBusiness() {
        return previousMainBusiness;
    }

    public void setPreviousMainBusiness(Double previousMainBusiness) {
        this.previousMainBusiness = previousMainBusiness;
    }

    public Double getPreviousNetprofit() {
        return previousNetprofit;
    }

    public void setPreviousNetprofit(Double previousNetprofit) {
        this.previousNetprofit = previousNetprofit;
    }

    public Double getPreviousTotalassets() {
        return previousTotalassets;
    }

    public void setPreviousTotalassets(Double previousTotalassets) {
        this.previousTotalassets = previousTotalassets;
    }

    public Double getPreviousNetassets() {
        return previousNetassets;
    }

    public void setPreviousNetassets(Double previousNetassets) {
        this.previousNetassets = previousNetassets;
    }

    public String getExternalBorrowing() {
        return externalBorrowing;
    }

    public void setExternalBorrowing(String externalBorrowing) {
        this.externalBorrowing = externalBorrowing == null ? null : externalBorrowing.trim();
    }

    public String getGuaranteeMethod() {
        return guaranteeMethod;
    }

    public void setGuaranteeMethod(String guaranteeMethod) {
        this.guaranteeMethod = guaranteeMethod == null ? null : guaranteeMethod.trim();
    }

    public String getUnresolvedDebtGuarantee() {
        return unresolvedDebtGuarantee;
    }

    public void setUnresolvedDebtGuarantee(String unresolvedDebtGuarantee) {
        this.unresolvedDebtGuarantee = unresolvedDebtGuarantee == null ? null : unresolvedDebtGuarantee.trim();
    }

    public String getTaxDisputeStatus() {
        return taxDisputeStatus;
    }

    public void setTaxDisputeStatus(String taxDisputeStatus) {
        this.taxDisputeStatus = taxDisputeStatus == null ? null : taxDisputeStatus.trim();
    }

    public String getOutstandingClaimStatus() {
        return outstandingClaimStatus;
    }

    public void setOutstandingClaimStatus(String outstandingClaimStatus) {
        this.outstandingClaimStatus = outstandingClaimStatus == null ? null : outstandingClaimStatus.trim();
    }

    public String getQualityAssuranceStatus() {
        return qualityAssuranceStatus;
    }

    public void setQualityAssuranceStatus(String qualityAssuranceStatus) {
        this.qualityAssuranceStatus = qualityAssuranceStatus == null ? null : qualityAssuranceStatus.trim();
    }

    public String getFinancialCommitmentStatus() {
        return financialCommitmentStatus;
    }

    public void setFinancialCommitmentStatus(String financialCommitmentStatus) {
        this.financialCommitmentStatus = financialCommitmentStatus == null ? null : financialCommitmentStatus.trim();
    }

    public String getBalanceSheetStatus() {
        return balanceSheetStatus;
    }

    public void setBalanceSheetStatus(String balanceSheetStatus) {
        this.balanceSheetStatus = balanceSheetStatus == null ? null : balanceSheetStatus.trim();
    }

    public String getEnvironmentalInspectionStatus() {
        return environmentalInspectionStatus;
    }

    public void setEnvironmentalInspectionStatus(String environmentalInspectionStatus) {
        this.environmentalInspectionStatus = environmentalInspectionStatus == null ? null : environmentalInspectionStatus.trim();
    }

    public String getFireInspectionStatus() {
        return fireInspectionStatus;
    }

    public void setFireInspectionStatus(String fireInspectionStatus) {
        this.fireInspectionStatus = fireInspectionStatus == null ? null : fireInspectionStatus.trim();
    }

    public String getBusinessInspectionStatus() {
        return businessInspectionStatus;
    }

    public void setBusinessInspectionStatus(String businessInspectionStatus) {
        this.businessInspectionStatus = businessInspectionStatus == null ? null : businessInspectionStatus.trim();
    }

    public String getArrearsTaxesStatus() {
        return arrearsTaxesStatus;
    }

    public void setArrearsTaxesStatus(String arrearsTaxesStatus) {
        this.arrearsTaxesStatus = arrearsTaxesStatus == null ? null : arrearsTaxesStatus.trim();
    }

    public String getArbitrationLawStatus() {
        return arbitrationLawStatus;
    }

    public void setArbitrationLawStatus(String arbitrationLawStatus) {
        this.arbitrationLawStatus = arbitrationLawStatus == null ? null : arbitrationLawStatus.trim();
    }

    public String getEntryPeople() {
        return entryPeople;
    }

    public void setEntryPeople(String entryPeople) {
        this.entryPeople = entryPeople == null ? null : entryPeople.trim();
    }

    public String getAccountManager() {
        return accountManager;
    }

    public void setAccountManager(String accountManager) {
        this.accountManager = accountManager == null ? null : accountManager.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getTemp1() {
        return temp1;
    }

    public void setTemp1(String temp1) {
        this.temp1 = temp1 == null ? null : temp1.trim();
    }

    public String getTemp2() {
        return temp2;
    }

    public void setTemp2(String temp2) {
        this.temp2 = temp2 == null ? null : temp2.trim();
    }
}