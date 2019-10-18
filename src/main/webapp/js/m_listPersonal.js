'use strict';
jQuery(document).ready(function(){

    initPersonalList();

});

function initPersonalList(){
    var userType=sessionStorage.getItem("userType");
    if(userType=="1"){
        findAll();
    }else if(userType=="0"){
        findByName(sessionStorage.getItem("employeeName"));
    }
}

function findAll() {
    $(function(){
        $.ajax({
            url: 'personalInformation/findAll',
            type: 'post',
            dataType:'json',
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            console.log("error");
        }
        function succFunction(data){
            if(data.length>0) {
                for (var i = 0; i < data.length; i++){
                    $("#personalList").append(
                        '<tr>'+
                        '<td style="display: none">'+data[i].id+'</td>'+
                        '<td class="text-center">'+data[i].personalName+'</td>'+
                        '<td class="text-center">'+data[i].identificationNumber+'</td>'+
                        '<td class="text-center">'+data[i].mailboxNumber+'</td>'+
                        '<td class="text-center">'+getEducation(data[i].highestEducation)+'</td>'+
                        '<td class="text-center">'+getLoanStatus(data[i].loanStatus)+'</td>'+
                        '<td class="text-center">'+data[i].loanMechanism+'</td>'+
                        '<td class="text-center">'+dateFormat(data[i].loanDate)+'</td>'+
                        '<td class="text-center">'+data[i].loanAmount+'</td>'+
                        '<td class="text-center">'+data[i].loanMonthlyRepayment+'</td>'+
                        '<td class="text-center">'+
                        '<a href=\"m_edit_personal.html?id='+data[i].id+'\" class="btn btn-success btn-mini"><i class="fa fa-edit"></i>编辑</a>'+
                        '<a href="#" onclick="personalDelete(event)" class="btn btn-warning"><i class="fa fa-trash-o"></i>删除</a>'+
                        '</td>'+
                        '</tr>'
                    );
                }
            }
        }
    });
}

function findByName(accountManager) {
    $(function(){
        $.ajax({
            url: 'personalInformation/findByName',
            type: 'post',
            dataType:'json',
            data:{"accountManager":accountManager},
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            console.log("error");
        }
        function succFunction(data){
            if(data.length>0) {
                for (var i = 0; i < data.length; i++){
                    $("#personalList").append(
                        '<tr>'+
                        '<td style="display: none">'+data[i].id+'</td>'+
                        '<td class="text-center">'+data[i].personalName+'</td>'+
                        '<td class="text-center">'+data[i].identificationNumber+'</td>'+
                        '<td class="text-center">'+data[i].mailboxNumber+'</td>'+
                        '<td class="text-center">'+getEducation(data[i].highestEducation)+'</td>'+
                        '<td class="text-center">'+getLoanStatus(data[i].loanStatus)+'</td>'+
                        '<td class="text-center">'+data[i].loanMechanism+'</td>'+
                        '<td class="text-center">'+dateFormat(data[i].loanDate)+'</td>'+
                        '<td class="text-center">'+data[i].loanAmount+'</td>'+
                        '<td class="text-center">'+data[i].loanMonthlyRepayment+'</td>'+
                        '<td class="text-center">'+
                        '<a href=\"m_edit_personal.html?id='+data[i].id+'\" class="btn btn-success btn-mini"><i class="fa fa-edit"></i>编辑</a>'+
                        '<a href="#" onclick="personalDelete(event)" class="btn btn-warning"><i class="fa fa-trash-o"></i>删除</a>'+
                        '</td>'+
                        '</tr>'
                    );
                }
            }
        }
    });
}


function personalDelete(event){
    var e=event||window.event;
    var targetElement=e.target||e.srcElement;
    var trElement=$(targetElement).parents("tr").children();
    var id=$(trElement[0]).text();
    $(function(){
        $.ajax({
            url: 'personalInformation/deleteById',
            type: 'post',
            dataType:'json',
            data:{'id':id},
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            $('#promptContent').html('删除失败！');
            $('#Info_prompt').modal('show');
        }
        function succFunction(data){
            if(data==1||data=='1'){
                $('#promptContent').html('删除成功！');
                $('#Info_prompt').modal('show');
            }else{
                $('#promptContent').html('删除失败！');
                $('#Info_prompt').modal('show');
            }
        }
    });
}

function dateFormat(longTypeDate){
    if(longTypeDate.toString()=="-28800000"||longTypeDate.toString()=="0"){
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

//返回学历
function getEducation(education){
    var thisEducation;
    switch (education) {
        case "0":thisEducation="";
            break;
        case "1":thisEducation="博士";
            break;
        case "2":thisEducation="硕士";
            break;
        case "3":thisEducation="本科";
            break;
        case "4":thisEducation="专科";
            break;
        case "5":thisEducation="高中";
            break;
        case "6":thisEducation="初中";
            break;
        case "7":thisEducation="小学";
            break;
    }
    return thisEducation;
}

//返回贷款状态
function getLoanStatus(loanStatus){
    var thisLoanStatus;
    switch (loanStatus) {
        case "0":thisLoanStatus="";
            break;
        case "1":thisLoanStatus="有";
            break;
        case "2":thisLoanStatus="无";
            break;
    }
    return thisLoanStatus;
}

$('#btnClose').click(function(){
    $('#Info_prompt').modal('hide');
});

$(function(){
    $('#Info_prompt').on('hide.bs.modal',function(){
        location.reload();
    });
});

