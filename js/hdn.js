// 헤더
$(function(){
    $("header i").on("click", function () {
        $("nav").stop().slideDown(1000);
    });
    $("nav i").on("click", function () {
        $("nav").stop().slideUp(1000);
    });
});