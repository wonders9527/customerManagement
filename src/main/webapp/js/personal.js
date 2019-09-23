'use strict';
jQuery(document).ready(function() {


});




$('#addPersonal').click(function () {

    var inputArray=new Array("personalName","identificationNumber","mailboxNumber","motherName",
        "residenceAddress","spouseCompanyPhone","mortgageApplicationDate","mortgageMonthly","houseConstructionData",
        "vehicleInsuranceCompanyname", 'vehicleInsuranceEnddate','borrowerUsedQuota','spouseCreditLine','spouseUsedQuota',
        'loanMechanism','loanDate','loanAmount','loanMonthlyRepayment','insuranceType');

    var selectArray=new Array("highestEducation","spouseCreditcardStatus","spouseOverdueStatus","loanStatus");

    for(var i=0;i<inputArray.length;i++){
        var thisInput='input[name="'+inputArray[i]+'"]';
        $(thisInput).css("border","");
        if($(thisInput).val()==null||$(thisInput).val()==undefined||$(thisInput).val()==""||$(thisInput).val()==0||$(thisInput).val()=="0"){
            var inputFlag = true;
            $(thisInput).css("border","2px solid red");
        }
    }

    for(var i=0;i<selectArray.length;i++){
        var thisSelect='#'+selectArray[i];
        $(thisSelect).css("border","");
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
        "accountManager":sessionStorage.getItem("employeeName"),
        "remark":$('#remark').val()
    };

    $(function(){
        $.ajax({
            url: 'personalInformation/insertPersonal',
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




function ceshi() {
    $('#promptContent').html('保存成功！');
    $('#Info_prompt').modal('show');
}