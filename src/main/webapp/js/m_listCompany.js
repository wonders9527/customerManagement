'use strict';
jQuery(document).ready(function() {

    initCompanyList();

});

function initCompanyList() {
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
            url: 'companyInformation/findAll',
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
                    $("#companyList").append(
                        '<tr>'+
                        '<td style="display: none">'+data[i].id+'</td>'+
                        '<td class="text-center">'+data[i].companyName+'</td>'+
                        '<td class="text-center">'+data[i].companyCreditcode+'</td>'+
                        '<td class="text-center">'+getOrganization(data[i].companyOrganization)+'</td>'+
                        '<td class="text-center">'+dateFormat(data[i].companyEstablishDate)+'</td>'+
                        '<td class="text-center">'+data[i].companyRegisteredCapital+'</td>'+
                        '<td class="text-center">'+data[i].companyPaidinCapital+'</td>'+
                        '<td class="text-center">'+data[i].actualController+'</td>'+
                        '<td class="text-center">'+getStatus(data[i].actualControllerChange)+'</td>'+
                        '<td class="text-center">'+getStatus(data[i].equityPledgeStatus)+'</td>'+
                        '<td class="text-center">'+
                        '<a href=\"m_edit_company.html?id='+data[i].id+'\" class="btn btn-success btn-mini"><i class="fa fa-edit"></i>编辑</a>'+
                        '<a href="#" onclick="companyDelete(event)" class="btn btn-warning"><i class="fa fa-trash-o"></i>删除</a>'+
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
            url: 'companyInformation/findByName',
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
                    $("#companyList").append(
                        '<tr>'+
                        '<td style="display: none">'+data[i].id+'</td>'+
                        '<td class="text-center">'+data[i].companyName+'</td>'+
                        '<td class="text-center">'+data[i].companyCreditcode+'</td>'+
                        '<td class="text-center">'+getOrganization(data[i].companyOrganization)+'</td>'+
                        '<td class="text-center">'+dateFormat(data[i].companyEstablishDate)+'</td>'+
                        '<td class="text-center">'+data[i].companyRegisteredCapital+'</td>'+
                        '<td class="text-center">'+data[i].companyPaidinCapital+'</td>'+
                        '<td class="text-center">'+data[i].actualController+'</td>'+
                        '<td class="text-center">'+getStatus(data[i].actualControllerChange)+'</td>'+
                        '<td class="text-center">'+getStatus(data[i].equityPledgeStatus)+'</td>'+
                        '<td class="text-center">'+
                        '<a href=\"m_edit_company.html?id='+data[i].id+'\" class="btn btn-success btn-mini"><i class="fa fa-edit"></i>编辑</a>'+
                        '<a href="#" onclick="companyDelete(event)" class="btn btn-warning"><i class="fa fa-trash-o"></i>删除</a>'+
                        '</td>'+
                        '</tr>'
                    );
                }
            }
        }
    });
}


function companyDelete(event){
    var e=event||window.event;
    var targetElement=e.target||e.srcElement;
    var trElement=$(targetElement).parents("tr").children();
    var id=$(trElement[0]).text();
    $(function(){
        $.ajax({
            url: 'companyInformation/deleteById',
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

//返回组织形式
function getOrganization(organization) {
    var thisOrganization;
    switch (organization) {
        case "0":thisOrganization="";
            break;
        case "1":thisOrganization="股份有限公司";
            break;
        case "2":thisOrganization="有限责任公司";
            break;
        case "3":thisOrganization="合伙企业";
            break;
        case "4":thisOrganization="个人独资企业";
            break;
    }
    return thisOrganization;
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
function getEducation(education) {
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

//返回有无状态
function getStatus(status) {
    var thisStatus;
    switch (status) {
        case "0":thisStatus="";
            break;
        case "1":thisStatus="有";
            break;
        case "2":thisStatus="无";
            break;
    }
    return thisStatus;
}


$('#btnClose').click(function(){
    $('#Info_prompt').modal('hide');
});

$(function() {
    $('#Info_prompt').on('hide.bs.modal',function() {
        location.reload();
    });
});