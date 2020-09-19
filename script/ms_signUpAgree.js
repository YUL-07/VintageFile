$(function () {
    $("#gnb>ul>li.mainLi").mouseover(function () {
        $("#gnb>ul>li.mainLi").children("ul").stop().slideDown("normal")
    });
    $("#gnb>ul>li").mouseout(function () {
        $("#gnb>ul>li").children("ul").stop().slideUp("normal")
    });
});


$("#chkBtn").click(function () {
    let btnFst = $("#agreeF").prop("checked");
    let btnSnd = $("#agreeS").prop("checked");
    let btnTrd = $("#agreeT").prop("checked");

    if (btnFst == false || btnSnd == false || btnTrd == false) {
        if ($("span#span1").length == 0) {
            $("#spanAF").after("<span id='span1'>*필수</span>");
            $("#spanAS").after("<span id='span1'>*필수</span>");
            $("#chkResult").after("<span id='span1'>*필수</span>");
        }
        return false;
    } else if (btnFst == true && btnSnd == true && btnTrd == true) {
        $("#span1").remove();
    }

    $("form").attr("method", "post");
    $("form").attr("action", "ms_signUp.html");
    $("form").submit();

});

$(function(){
    
})