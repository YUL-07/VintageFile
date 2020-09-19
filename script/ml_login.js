$(function () {
    $("#gnb>ul>li.mainLi").mouseover(function () {
        $("#gnb>ul>li.mainLi").children("ul").stop().slideDown("normal")
    });
    $("#gnb>ul>li").mouseout(function () {
        $("#gnb>ul>li").children("ul").stop().slideUp("normal")
    });
});

function chk() {
    let userID = $(":text").val();
    let userPW = $(":password").val();

    if (userID == "" && userPW == "") {
        $("#userID").children(".msg").css({ "display": "inline-block" });
        $("#userPW").children(".msg").css({ "display": "inline-block" });
        return false;
    } else if(userID != "" && userPW == "") {
        $("#userID").children(".msg").remove();
        $("#userPW").children(".msg").css({ "display": "inline-block" });
        return false;
    }else if(userID == "" && userPW != "") {
        $("#userID").children(".msg").css({ "display": "inline-block" });
        $("#userPW").children(".msg").remove();
        return false;
    }
    document.frm.method = "post";
    document.frm.action = "ml_loginMainpage.html";
    document.frm.submit();

}
