'use strict';
jQuery(document).ready(function() {
    init();

});

function init() {

    var ws = new WebSocket("ws://192.168.10.226:8080/customerManagement_war_exploded/companyInformation/findAll");
    console.log(ws);
    ws.onopen = function()
    {
        // Web Socket 已连接上，使用 send() 方法发送数据
        ws.send("发送数据");
        alert("数据发送中...");
    };
    ws.onmessage = function (evt) {
        console.log(evt);
        var received_msg = evt.data;
        console.log(received_msg);
    };

}