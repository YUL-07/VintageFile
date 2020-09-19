$(function () {
    $("#gnb>ul>li.mainLi").mouseover(function () {
        $("#gnb>ul>li.mainLi").siblings("ul").stop().slideDown("normal")
    });
    $("#gnb>ul>li").mouseout(function () {
        $("#gnb>ul>li").siblings("ul").stop().slideUp("normal")
    });
});

$("div#btnList>button").click(function () {
    let linkValue = $(this).attr("data-Link");

    $(".linkReset").css({ "display": "none" });
    $("#" + linkValue).css({ "display": "block" });

    $("div#btnList>button").removeClass("tabOn");
    $(this).addClass("tabOn");
});

$("#findPH").click(function () {

    let userN = $("#pUserN").val();
    let phoneN = $("#pPhoneN").val();

    if (userN == "" && phoneN == "") {
        $("#pUserN").siblings(".blankPH").css({ "display": "inline-block" });
        $("#pPhoneN").siblings(".blankPH").css({ "display": "inline-block" });
        return false;
    } else if (userN != "" && phoneN == "") {
        $("#pUserN").siblings(".blankPH").remove();
        $("#pPhoneN").siblings(".blankPH").css({ "display": "inline-block" });
        return false;
    } else if (userN == "" && userPH != "") {
        $("#pUserN").siblings(".blankPH").css({ "display": "inline-block" });
        $("#pPhoneN").siblings(".blankPH").remove();
        return false;
    }
    document.frm.method = "post";
    document.frm.action = "ml_loginMainpage.html";
    document.frm.submit();

});