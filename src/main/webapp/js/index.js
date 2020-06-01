'use strict';
jQuery(document).ready(function() {
    init();
    window.setInterval(function() {
        aaa();
    },3000);


});

var add = (function () {
    var alterDiv=$("#alterDiv").children();
    var counter = 0;
    return function () {
        if(counter==alterDiv.length-1){
            return counter=0;
        }else {
            return counter += 1;
        }
    }
})();

function aaa() {
    var alterDiv=$("#alterDiv").children();
    var coun=add();
    if(coun==0){
        alterDiv[alterDiv.length-1].style.display="none";
        alterDiv[coun].style.display="block";
    }else {
        alterDiv[coun-1].style.display="none";
        alterDiv[coun].style.display="block";
    }
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;

            break;
        }
    }
    if(window.screen.width>=768){
        flag =false;
    }
    return flag;
}

function init(){
    var alterDiv=$("#alterDiv").children();

    var flag= IsPC();
    if(flag==true){
        $("body").append(
            "<div id=\"menu\" class=\"menu\">\n" +
            "    <div id=\"one\" class=\"subMenu text-center\">\n" +
            "        <a class=\"menu_name\" href=\"qper.html\" style=\"color: #0d0d0d\">网站首页<i class=\"fa fa-bank\" style=\"font-size:60px\"></i></a>\n" +
            "    </div>\n" +
            "    <div id=\"two\" class=\"subMenu text-center\">\n" +
            "        <a class=\"menu_name\" href=\"application.html\" style=\"color: #0d0d0d\">申请贷款<i class=\"fa fa-vcard-o\" style=\"font-size:60px\"></i></a>\n" +
            "    </div>\n" +
            "    <div id=\"three\" class=\"subMenu text-center\">\n" +
            "        <a class=\"menu_name\" href=\"qper.html\" style=\"color: #0d0d0d\">找贷款<i class=\"fa fa-search\" style=\"font-size:60px\"></i></a>\n" +
            "    </div>\n" +
            "</div>"
        );
    }
    console.log(flag);
}


$("div .subMenu").click(function () {

    $(".active").removeClass("active");

    // 添加新状态
    $(this).addClass("active");
    //content根据点击按钮加载不同的html
    var page = $(this).attr("data-src");
    if(page){
        $("#content").load(page)
    }
});


/*content高度*/
function initSize() {
    var height = $(window).height() - $("header").height() - $("#description").height() - $("#menu").height();
    $("#content").height(height + "px");
}