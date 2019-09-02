'use strict';
jQuery(document).ready(function() {
    listAccount();

});

function listAccount() {
    $(function(){
        $.ajax({
            url: 'user/findAll',
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
                    $("#accountList").append(
                        '<tr>'+
                        '<td style="display: none">'+data[i].id+'</td>'+
                        '<td class="text-center">'+data[i].userName+'</td>'+
                        '<td class="text-center">'+data[i].employeeName+'</td>'+
                        '<td class="text-center">'+data[i].employeeNumber+'</td>'+
                        '<td class="text-center">'+data[i].workStatus+'</td>'+
                        '<td class="text-center">'+data[i].userType+'</td>'+
                        '<td class="text-center">'+
                        '<a href="#" onclick="accountEdit(event)" class="btn btn-success btn-mini"><i class="fa fa-edit"></i>编辑</a>'+
                        '<a href="#" onclick="accountDelete(event)" class="btn btn-warning"><i class="fa fa-trash-o"></i>删除</a>'+
                        '</td>'+
                        '</tr>'
                    );
                }
            }
        }
    });
}

$('#addAccount').click(function () {

    var inputList=$('#addAccountModal').find("input");
    inputList.siblings("i").remove();
    var flag = false;
    for(var i=0;i<inputList.length;i++){
        if($(inputList[i]).val()==null||$(inputList[i]).val()==undefined||$(inputList[i]).val()==""){
            flag = true;
            $(inputList[i]).after('<i class="fa fa-asterisk" style="color:red;margin-top: 10px;"></i>');
        }
    }

    if(flag == false){
        $(function(){
            $.ajax({
                url: 'user/saveAccount',
                type: 'post',
                dataType:'json',
                data:{'employeeName':$('#employeeName').val(),
                    'employeeNumber':$('#employeeNumber').val(),
                    'workStatus':$('#workStatus').val(),
                    'password':$('#password').val(),
                    'userName':$('#userName').val(),
                    'userType':$('#userType').val()
                },
                timeout: 3000,
                ache: false,
                error: erryFunction,    //错误执行方法
                success: succFunction   //成功执行方法
            });
            function erryFunction(){
                $('#addAccountModal').modal('hide');
                $('#promptContent').html('新增账号失败！');
                $('#Info_prompt').modal('show');
            }
            function succFunction(data){
                if(data.result==1){
                    $('#addAccountModal').modal('hide');
                    $('#promptContent').html('新增账号成功！');
                    $('#Info_prompt').modal('show');
                }else{
                    $('#addAccountModal').modal('hide');
                    $('#promptContent').html('新增账号失败！');
                    $('#Info_prompt').modal('show');
                }
            }
        });
    }
});

function accountEdit(event){
    var e=event||window.event;
    var targetElement=e.target||e.srcElement;
    var trElement=$(targetElement).parents("tr");

    $('#editAccountId').val($(trElement.children()[0]).text());
    $('#eUserName').val($(trElement.children()[1]).text());
    $('#eEmployeeName').val($(trElement.children()[2]).text());
    $('#eEmployeeNumber').val($(trElement.children()[3]).text());
    $('#eWorkStatus').val($(trElement.children()[4]).text());
    $('#eUserType').val($(trElement.children()[5]).text());
    $('#editAccountModal').modal('show');
}

$('#editAccount').click(function () {

    $(function(){
        $.ajax({
            url: 'user/update',
            type: 'post',
            dataType:'json',
            data:{'id':$('#editAccountId').val(),
                'employeeName':$('#eEmployeeName').val(),
                'employeeNumber':$('#eEmployeeNumber').val(),
                'workStatus':$('#eWorkStatus').val(),
                'userName':$('#eUserName').val(),
                'userType':$('#eUserType').val()
            },
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            $('#editAccountModal').modal('hide');
            $('#promptContent').html('编辑账号失败！');
            $('#Info_prompt').modal('show');
        }
        function succFunction(data){
            if(data.result==1){
                $('#editAccountModal').modal('hide');
                $('#promptContent').html('编辑账号成功！');
                $('#Info_prompt').modal('show');
            }else{
                $('#editAccountModal').modal('hide');
                $('#promptContent').html('编辑账号失败！');
                $('#Info_prompt').modal('show');
            }
        }
    });
});

function accountDelete(event){
    var e=event||window.event;
    var targetElement=e.target||e.srcElement;
    var trElement=$(targetElement).parents("tr");
    $(function(){
        $.ajax({
            url: 'user/delete',
            type: 'post',
            dataType:'json',
            data:{'id':$(trElement.children()[0]).text()},
            timeout: 3000,
            ache: false,
            error: erryFunction,    //错误执行方法
            success: succFunction   //成功执行方法
        });
        function erryFunction(){
            $('#promptContent').html('删除账号失败！');
            $('#Info_prompt').modal('show');
        }
        function succFunction(data){
            if(data.result==1){
                $('#promptContent').html('删除账号成功！');
                $('#Info_prompt').modal('show');
            }else{
                $('#promptContent').html('删除账号失败！');
                $('#Info_prompt').modal('show');
            }
        }
    });
}

