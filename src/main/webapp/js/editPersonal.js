'use strict';
jQuery(document).ready(function() {
    var baseUrl=document.URL;
    var thisId;
    if(baseUrl.indexOf('#')>0){
        thisId = document.URL.split('=')[1].split('#')[0];
        initPersonalById(thisId);
    }else if(baseUrl.indexOf('?')>0){
        thisId = document.URL.split('=')[1];
        initPersonalById(thisId);
    }

});

function initPersonalById(thisId){
    $(function(){
        $.ajax({
            url: 'personalInformation/findPersonalById',
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
            console.log(data);
            var a=dateFormat(data.createDate);
            $('#personalId').val(data.id);
            $('#applicationAmount').val(data.applicationAmount);
            $('#maximumMonthlyPayment').val(data.maximumMonthlyPayment);

            $('#personalName').val(data.personalName);
            $('#identificationNumber').val(data.identificationNumber);
            $('#maritalStatus').val(data.maritalStatus);
            $('#propertyNature').val(data.propertyNature);
            $('#mailboxNumber').val(data.mailboxNumber);
            $('#highestEducation').val(data.highestEducation);
            $('#motherName').val(data.motherName);
            $('#residenceAddress').val(data.residenceAddress);
            $('#nowLiving').val(data.nowLiving);
            $('#propertyLocation').val(data.propertyLocation);
            $('#companyName').val(data.companyName);
            $('#entryTime').val(dateFormat(data.entryTime));
            $('#employmentType').val(data.employmentType);
            $('#companyAddress').val(data.companyAddress);
            $('#companyPhone').val(data.companyPhone);
            $('#companyCellphoneNumber').val(data.companyCellphoneNumber);
            $('#averageIncome').val(data.averageIncome);

            $('#spouseName').val(data.spouseName);
            $('#spouseIdentificationNumber').val(data.spouseIdentificationNumber);
            $('#spouseCompanyName').val(data.spouseCompanyName);
            $('#spouseCompanyAddress').val(data.spouseCompanyAddress);

            $('#spouseCompanyPhone').val(data.spouseCompanyPhone);
            $('#spouseCellphoneNumber').val(data.spouseCellphoneNumber);
            $('#spouseAverageIncome').val(data.spouseAverageIncome);
            $('#emergencyContact').val(data.emergencyContact);
            $('#immediateKinship').val(data.immediateKinship);
            $('#relativesPhone').val(data.relativesPhone);
            $('#colleagueName').val(data.colleagueName);
            $('#colleaguePhone').val(data.colleaguePhone);
            $('#friendOneName').val(data.friendOneName);
            $('#friendOnePhone').val(data.friendOnePhone);
            $('#friendTwoName').val(data.friendTwoName);
            $('#friendTwoPhone').val(data.friendTwoPhone);
            $('#propertyPurchaseMethod').val(data.propertyPurchaseMethod);
            $('#deedStatus').val(data.deedStatus);
            $('#mortgageApplicationDate').val(dateFormat(data.mortgageApplicationDate));
            $('#mortgageMonthly').val(data.mortgageMonthly);

            $('#houseConstructionData').val(dateFormat(data.houseConstructionData));
            $('#houseArea').val(data.houseArea);
            $('#vehicleNumber').val(data.vehicleNumber);
            $('#vehiclePrice').val(data.vehiclePrice);
            $('#vehiclePurchaseDate').val(dateFormat(data.vehiclePurchaseDate));
            $('#vehicleModel').val(data.vehicleModel);
            $('#vehicleInsuranceCompanyname').val(data.vehicleInsuranceCompanyname);
            $('#vehicleInsuranceEnddate').val(dateFormat(data.vehicleInsuranceEnddate));
            $('#borrowerCreditcardStatus').val(data.borrowerCreditcardStatus);
            $('#borrowerCreditLine').val(data.borrowerCreditLine);
            $('#borrowerUsedQuota').val(data.borrowerUsedQuota);
            $('#borrowerOverdueStatus').val(data.borrowerOverdueStatus);
            $('#spouseCreditcardStatus').val(data.spouseCreditcardStatus);
            $('#spouseCreditLine').val(data.spouseCreditLine);
            $('#spouseUsedQuota').val(data.spouseUsedQuota);
            $('#spouseOverdueStatus').val(data.spouseOverdueStatus);

            $('#loanStatus').val(data.loanStatus);
            $('#loanMechanism').val(data.loanMechanism);
            $('#loanDate').val(dateFormat(data.loanDate));
            $('#loanAmount').val(data.loanAmount);
            $('#loanMonthlyRepayment').val(data.loanMonthlyRepayment);

            $('#insuranceStatus').val(data.insuranceStatus);
            $('#insuranceName').val(data.insuranceName);
            $('#insuranceAnnualPayment').val(data.insuranceAnnualPayment);
            $('#insuranceEffectiveDate').val(dateFormat(data.insuranceEffectiveDate));
            $('#insuranceType').val(data.insuranceType);

            $('#providentFundBase').val(data.providentFundBase);
            $('#providentFundYear').val(data.providentFundYear);

            $('#remark').val(data.remark);
        }
    });
}


$('#addPersonal').click(function () {

    var inputArray=new Array("personalName","identificationNumber","mailboxNumber","motherName",
        "residenceAddress","spouseCompanyPhone","mortgageApplicationDate","mortgageMonthly","houseConstructionData",
        "vehicleInsuranceCompanyname", 'vehicleInsuranceEnddate','borrowerUsedQuota','spouseCreditLine','spouseUsedQuota',
        'loanMechanism','loanDate','loanAmount','loanMonthlyRepayment','insuranceType');

    var selectArray=new Array("highestEducation","spouseCreditcardStatus","spouseOverdueStatus","loanStatus");

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

    var personalInformationTable={
        "id":$('#personalId').val(),
        "applicationAmount":$('#applicationAmount').val(),
        "maximumMonthlyPayment":$('#maximumMonthlyPayment').val(),
        "personalName":$('#personalName').val(),
        "identificationNumber":$('#identificationNumber').val(),
        "maritalStatus":$('#maritalStatus').val(),
        "propertyNature":$('#propertyNature').val(),
        "mailboxNumber":$('#mailboxNumber').val(),
        "highestEducation":$('#highestEducation').val(),
        "motherName":$('#motherName').val(),
        "residenceAddress":$('#residenceAddress').val(),
        "nowLiving":$('#nowLiving').val(),
        "propertyLocation":$('#propertyLocation').val(),
        "companyName":$('#companyName').val(),
        "entryTime":$('#entryTime').val(),
        "employmentType":$('#employmentType').val(),
        "companyAddress":$('#companyAddress').val(),
        "companyPhone":$('#companyPhone').val(),
        "companyCellphoneNumber":$('#companyCellphoneNumber').val(),
        "averageIncome":$('#averageIncome').val(),
        "spouseName":$('#spouseName').val(),
        "spouseIdentificationNumber":$('#spouseIdentificationNumber').val(),
        "spouseCompanyName":$('#spouseCompanyName').val(),
        "spouseCompanyAddress":$('#spouseCompanyAddress').val(),
        "spouseCompanyPhone":$('#spouseCompanyPhone').val(),
        "spouseCellphoneNumber":$('#spouseCellphoneNumber').val(),
        "spouseAverageIncome":$('#spouseAverageIncome').val(),
        "emergencyContact":$('#emergencyContact').val(),
        "immediateKinship":$('#immediateKinship').val(),
        "relativesPhone":$('#relativesPhone').val(),
        "colleagueName":$('#colleagueName').val(),
        "colleaguePhone":$('#colleaguePhone').val(),
        "friendOneName":$('#friendOneName').val(),
        "friendOnePhone":$('#friendOnePhone').val(),
        "friendTwoName":$('#friendTwoName').val(),
        "friendTwoPhone":$('#friendTwoPhone').val(),
        "propertyPurchaseMethod":$('#propertyPurchaseMethod').val(),
        "deedStatus":$('#deedStatus').val(),
        "mortgageApplicationDate":$('#mortgageApplicationDate').val(),
        "mortgageMonthly":$('#mortgageMonthly').val(),
        "houseConstructionData":$('#houseConstructionData').val(),
        "houseArea":$('#houseArea').val(),
        "vehicleNumber":$('#vehicleNumber').val(),
        "vehiclePrice":$('#vehiclePrice').val(),
        "vehiclePurchaseDate":$('#vehiclePurchaseDate').val(),
        "vehicleModel":$('#vehicleModel').val(),
        "vehicleInsuranceCompanyname":$('#vehicleInsuranceCompanyname').val(),
        "vehicleInsuranceEnddate":$('#vehicleInsuranceEnddate').val(),
        "borrowerCreditcardStatus":$('#borrowerCreditcardStatus').val(),
        "borrowerCreditLine":$('#borrowerCreditLine').val(),
        "borrowerUsedQuota":$('#borrowerUsedQuota').val(),
        "borrowerOverdueStatus":$('#borrowerOverdueStatus').val(),
        "spouseCreditcardStatus":$('#spouseCreditcardStatus').val(),
        "spouseCreditLine":$('#spouseCreditLine').val(),
        "spouseUsedQuota":$('#spouseUsedQuota').val(),
        "spouseOverdueStatus":$('#spouseOverdueStatus').val(),

        "loanStatus":$('#loanStatus').val(),
        "loanMechanism":$('#loanMechanism').val(),
        "loanDate":$('#loanDate').val(),
        "loanAmount":$('#loanAmount').val(),
        "loanMonthlyRepayment":$('#loanMonthlyRepayment').val(),

        "insuranceStatus":$('#insuranceStatus').val(),
        "insuranceName":$('#insuranceName').val(),
        "insuranceAnnualPayment":$('#insuranceAnnualPayment').val(),
        "insuranceEffectiveDate":$('#insuranceEffectiveDate').val(),
        "insuranceType":$('#insuranceType').val(),

        "providentFundBase":$('#providentFundBase').val(),
        "providentFundYear":$('#providentFundYear').val(),

        "remark":$('#remark').val()
    };

    console.log(personalInformationTable);
    $(function(){
        $.ajax({
            url: 'personalInformation/updateById',
            type: 'post',
            dataType:'json',
            contentType:'application/json; charset=utf-8',
            //data:personalInformationTable,
            data:JSON.stringify(personalInformationTable),
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            console.log("err");
        }
        function succFunction(data){
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

function dateFormat(longTypeDate){
    var dateTypeDate = "";
    var date = new Date();
    date.setTime(longTypeDate);
    dateTypeDate += date.getFullYear();   //年
    dateTypeDate += "-" + getMonth(date); //月
    dateTypeDate += "-" + getDay(date);   //日
    return dateTypeDate;
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
