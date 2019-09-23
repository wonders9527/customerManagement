'use strict';
jQuery(document).ready(function() {


});


$('#loginForm').click(function () {
    $(function(){
        $.ajax({
            url: 'user/login',
            type: 'post',
            dataType:'json',
            //data:personalInformationTable,
            data:{userName:$('#form-username').val(),password:$('#form-password').val()},
            timeout: 3000,
            async: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            console.log('err');
        }
        function succFunction(data){
            if(data!=null&&data.userName!=null&&data.userType!=null&&data.workStatus!=null){
                sessionStorage.setItem("userName", data.userName);
                sessionStorage.setItem("userType", data.userType);
                sessionStorage.setItem("workStatus", data.workStatus);
                sessionStorage.setItem("employeeName", data.employeeName);
                window.location.href="m_index.html";
            }else{
                window.location.href="login.html";
            }
        }
    });
});

