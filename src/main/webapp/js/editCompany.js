'use strict';
jQuery(document).ready(function() {
    var baseUrl=document.URL;
    var thisId;
    if(baseUrl.indexOf('#')>0){
        thisId = document.URL.split('=')[1].split('#')[0];
        initCompanyById(thisId);
    }else if(baseUrl.indexOf('?')>0){
        thisId = document.URL.split('=')[1];
        initCompanyById(thisId);
    }

});

function initCompanyById(thisId) {
    $(function(){
        $.ajax({
            url: 'companyInformation/findCompanyById',
            type: 'post',
            dataType:'json',
            data:{'id':thisId},
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            console.log("err");
        }
        function succFunction(data){
            $('#companyId').val(data.id);
            $('#applicationAmount').val(data.applicationAmount);
            $('#maximumMonthlyPayment').val(data.maximumMonthlyPayment);

            $('#companyName').val(data.companyName);
            $('#companyCreditcode').val(data.companyCreditcode);

            $('#companyOrganization').val(data.companyOrganization);
            $('#companyEstablishDate').val(dateFormat(data.companyEstablishDate));

            $('#companyRegisteredCapital').val(data.companyRegisteredCapital);
            $('#companyPaidinCapital').val(data.companyPaidinCapital);

            $('#investmentStatus').val(data.investmentStatus);
            $('#investmentStandard').val(data.investmentStandard);
            $('#shareholdersNumber').val(data.shareholdersNumber);
            $('#actualController').val(data.actualController);
            $('#actualControllerChange').val(data.actualControllerChange);
            $('#equityPledgeStatus').val(data.equityPledgeStatus);
            $('#equityFreezeStatus').val(data.equityFreezeStatus);
            $('#businessScope').val(data.businessScope);
            $('#mainBusiness').val(data.mainBusiness);
            $('#mainBusinessChange').val(data.mainBusinessChange);

            $('#mainBusinessDispersion').val(data.mainBusinessDispersion);

            $('#businessPlace').val(data.businessPlace);
            $('#businessPlaceWay').val(data.businessPlaceWay);

            $('#previousMainBusiness').val(data.previousMainBusiness);
            $('#previousNetprofit').val(data.previousNetprofit);
            $('#previousTotalassets').val(data.previousTotalassets);
            $('#previousNetassets').val(data.previousNetassets);

            $('#externalBorrowing').val(data.externalBorrowing);
            $('#guaranteeMethod').val(data.guaranteeMethod);
            $('#unresolvedDebtGuarantee').val(data.unresolvedDebtGuarantee);

            $('#taxDisputeStatus').val(data.taxDisputeStatus);
            $('#outstandingClaimStatus').val(data.outstandingClaimStatus);
            $('#qualityAssuranceStatus').val(data.qualityAssuranceStatus);
            $('#financialCommitmentStatus').val(data.financialCommitmentStatus);
            $('#balanceSheetStatus').val(data.balanceSheetStatus);
            $('#arrearsTaxesStatus').val(data.arrearsTaxesStatus);
            $('#arbitrationLawStatus').val(data.arbitrationLawStatus);
            $('#environmentalInspectionStatus').val(data.environmentalInspectionStatus);
            $('#fireInspectionStatus').val(data.fireInspectionStatus);
            $('#businessInspectionStatus').val(dateFormat(data.businessInspectionStatus));
        }
    });
}



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
        "id":$('#companyId').val(),
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
        "businessInspectionStatus":$('#businessInspectionStatus').val()
    };

    console.log(companyInformationTable);

    $(function(){
        $.ajax({
            url: 'companyInformation/updateById',
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
            $('#promptContent').html('编辑失败！');
            $('#Info_prompt').modal('show');
        }
        function succFunction(data){
            console.log(data);
            if(data==1||data=='1'){
                $('#promptContent').html('编辑成功！');
                $('#Info_prompt').modal('show');
            }else{
                $('#promptContent').html('编辑失败！');
                $('#Info_prompt').modal('show');
            }
        }
    });
}

function dateFormat(longTypeDate){
    if(longTypeDate.toString()=="-28800000"){
        return "";
    }else if(longTypeDate!=null||longTypeDate!=undefined){
        var dateTypeDate = "";
        var date = new Date();
        date.setTime(longTypeDate);
        dateTypeDate += date.getFullYear();   //年
        dateTypeDate += "-" + getMonth(date); //月
        dateTypeDate += "-" + getDay(date);   //日
        return dateTypeDate;
    }else {
        return "";
    }
}

//返回 01-12 的月份值
function getMonth(date){
    var month = "";
    month = date.getMonth() + 1; //getMonth()得到的月份是0-11
    if(month<10){
        month = "0" + month;
    }
    return month;
}
//返回01-30的日期
function getDay(date){
    var day = "";
    day = date.getDate();
    if(day<10){
        day = "0" + day;
    }
    return day;
}
