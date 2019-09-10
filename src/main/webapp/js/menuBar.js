'use strict';
jQuery(document).ready(function() {

    init();
});

function init(){
    var userName=sessionStorage.getItem("userName");
    var userType=sessionStorage.getItem("userType");
    var workStatus=sessionStorage.getItem("workStatus");
    if(userType=="1"){
        $('#menuList').append(menuList+
            '<li>'+
            '<a href="m_account.html"><i class="icon-table nav-icon"></i><span class="nav-text">账号管理</span></a>'+
            '</li>'
        );
    }else if(userType=="0"){
        $('#menuList').append(menuList);
    }
}

var menuList='<li>' +
    '<a href="#"><i class="icon-table nav-icon"></i><span class="nav-text">企业信息</span></a>'+
    '<ul>' +
    '<li><a class="subnav-text" href="m_add_company.html">企业信息录入</a></li>'+
    '<li><a class="subnav-text" href="m_list_company.html">企业信息列表</a></li>'+
    '</ul>'+
    '</li>'+
    '<li>'+
    '<a href="#"><i class="icon-font nav-icon"></i><span class="nav-text">个人信息</span></a>'+
    '<ul>'+
    '<li><a class="subnav-text" href="m_add_personal.html">个人信息录入</a></li>'+
    '<li><a class="subnav-text" href="m_list_personal.html">个人信息列表</a></li>'+
    '</ul>'+
    '</li>';