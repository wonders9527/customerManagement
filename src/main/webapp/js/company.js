'use strict';
jQuery(document).ready(function() {


});


$('#addCompany').click(function () {

    var inputArray=new Array("companyName","companyCreditcode");

    var selectArray=new Array("investmentStatus","investmentStandard","equityPledgeStatus","equityFreezeStatus",
        "mainBusinessChange","mainBusinessDispersion","outstandingClaimStatus","qualityAssuranceStatus","financialCommitmentStatus",
        "balanceSheetStatus");

    for(var i=0;i<inputArray.length;i++){
        var thisInput='input[name="'+inputArray[i]+'"]';
        $(thisInput).css("border","");
        //var inputFlag = false;
        if($(thisInput).val()==null||$(thisInput).val()==undefined||$(thisInput).val()==""||$(thisInput).val()==0||$(thisInput).val()=="0"){
            var inputFlag = true;
            $(thisInput).css("border","2px solid red");
        }
    }

    for(var i=0;i<selectArray.length;i++){
        var thisSelect='#'+selectArray[i];
        $(thisSelect).css("border","");
        //var selectFlag = false;
        if($(thisSelect).val()==null||$(thisSelect).val()==undefined||$(thisSelect).val()==""||$(thisSelect).val()==0||$(thisSelect).val()=="0"){
            var selectFlag = true;
            $(thisSelect).css("border","2px solid red");
        }
    }

    if(selectFlag==null||selectFlag==undefined||selectFlag==""||selectFlag==0||selectFlag=="0"){
        if(inputFlag==null||inputFlag==undefined||inputFlag==""||inputFlag==0||inputFlag=="0"){
            ajaxFunction();
        }
    }

});

function ajaxFunction(){

    var companyInformationTable={
        "applicationAmount":$('#applicationAmount').val(),
        "maximumMonthlyPayment":$('#maximumMonthlyPayment').val(),
        "companyName":$('#companyName').val(),
        "companyCreditcode":$('#companyCreditcode').val(),
        "companyOrganization":$('#companyOrganization').val(),
        "companyEstablishDate":$('#companyEstablishDate').val(),
        "companyRegisteredCapital":$('#companyRegisteredCapital').val(),
        "companyPaidinCapital":$('#companyPaidinCapital').val(),
        "investmentStatus":$('#investmentStatus').val(),
        "investmentStandard":$('#investmentStandard').val(),
        "shareholdersNumber":$('#shareholdersNumber').val(),
        "actualController":$('#actualController').val(),
        "actualControllerChange":$('#actualControllerChange').val(),
        "equityPledgeStatus":$('#equityPledgeStatus').val(),
        "equityFreezeStatus":$('#equityFreezeStatus').val(),
        "businessScope":$('#businessScope').val(),
        "mainBusiness":$('#mainBusiness').val(),
        "mainBusinessChange":$('#mainBusinessChange').val(),
        "mainBusinessDispersion":$('#mainBusinessDispersion').val(),
        "businessPlace":$('#businessPlace').val(),
        "businessPlaceWay":$('#businessPlaceWay').val(),
        "previousMainBusiness":$('#previousMainBusiness').val(),
        "previousNetprofit":$('#previousNetprofit').val(),
        "previousTotalassets":$('#previousTotalassets').val(),
        "previousNetassets":$('#previousNetassets').val(),
        "externalBorrowing":$('#externalBorrowing').val(),
        "guaranteeMethod":$('#guaranteeMethod').val(),
        "unresolvedDebtGuarantee":$('#unresolvedDebtGuarantee').val(),
        "taxDisputeStatus":$('#taxDisputeStatus').val(),
        "outstandingClaimStatus":$('#outstandingClaimStatus').val(),
        "qualityAssuranceStatus":$('#qualityAssuranceStatus').val(),
        "financialCommitmentStatus":$('#financialCommitmentStatus').val(),
        "balanceSheetStatus":$('#balanceSheetStatus').val(),
        "arrearsTaxesStatus":$('#arrearsTaxesStatus').val(),
        "arbitrationLawStatus":$('#arbitrationLawStatus').val(),
        "environmentalInspectionStatus":$('#environmentalInspectionStatus').val(),
        "fireInspectionStatus":$('#fireInspectionStatus').val(),
        "businessInspectionStatus":$('#businessInspectionStatus').val(),
        "accountManager":sessionStorage.getItem("employeeName")
    };

    //
    $(function(){
        $.ajax({
            url: 'companyInformation/insertCompany',
            type: 'post',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            //data:personalInformationTable,
            data:JSON.stringify(companyInformationTable),
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            console.log("err");
        }
        function succFunction(data){
            console.log(data);
            if(data==1||data=='1'){
                $('#promptContent').html('保存成功！');
                $('#Info_prompt').modal('show');
            }else{
                $('#promptContent').html('保存失败！');
                $('#Info_prompt').modal('show');
            }
        }
    });
}

$('#btnClose').click(function(){
    $('#Info_prompt').modal('hide');
});

$(function() {
    $('#Info_prompt').on('hide.bs.modal',function() {
        location.reload();
        // window.location.href='m_add_company.html';
    })
});