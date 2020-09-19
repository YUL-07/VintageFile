$(function () {
    $("#gnb>ul>li.mainLi").mouseover(function () {
        $("#gnb>ul>li.mainLi").children("ul").stop().slideDown("normal")
    });
    $("#gnb>ul>li").mouseout(function () {
        $("#gnb>ul>li").children("ul").stop().slideUp("normal")
    });
});

$(function () {
    var now = new Date();
    var thisYear = now.getFullYear();

    //select option 연도 입력 시작

    var yearData = "";
    var yearData = "<option>Year</option>";
    while (thisYear >= 1940) {
        yearData += "<option>" + thisYear + "</option>";
        thisYear--;
    }
    document.getElementById("birthYear").innerHTML = yearData;
    //select option 연도 입력 끝

    //select option 월 입력 시작
    var thisMonth = 1;
    var monthData = "<option>Month</option>";
    while (thisMonth <= 12) {
        monthData += "<option >" + thisMonth + "</option>";
        thisMonth++;
    }
    document.getElementById("birthMonth").innerHTML = monthData;
    //select option 월 입력 끝

    // select option 일 입력 시작
    var thisDay = 1;
    var dayData = "<option>Day</option>";
    while (thisDay <= 31) {
        dayData += "<option>" + thisDay + "</option>";
        thisDay++;
    }
    document.getElementById("birthDay").innerHTML = dayData;
    // select option 일 입력 끝
});

$("#chkBtn").click(function () {
    let userN = $("#userN").val();
    let userID = $("#userID").val();
    let userPW = $("#userPW").val();
    let userPWChk = $("#userPWChk").val();
    let userPH = $("#userPH").val();
    let userE = $("#userE").val();
    let emailAdress = $("#emailAdress").val();


    if (userN == "" || userID == "" || userPW == "" || userPWChk == "" || userPH == "" || userE == ""
        || emailAdress == "") {
        if ($("span#span1").length == 0) {
            $(".requirement").after("<span id='span1'>*필수</span>");
        }
        return false;
    } else if (userN != "" && userID != "" && userPW != "" && userPWChk != "" && userPH != "" && userE != "" &&
        emailAdress != "") {
        $("span#span1").remove();
    }
    if (isNaN(userPH)) {
        $("span#msg").css({ "color": "red" });
        return false;
    } else if (userPH.length != 11) {
        $("span#msg").css({ "color": "red" });
        return false;
    } else {
        $("span#msg").css({ "color": "#ccc" });
    }
    if (userPW != userPWChk) {
        if ($("span#span1").length == 0) {
            $(".discord").after("<span id='span1'>*불일치</span>");
        }
        return false;
    } else if (userPW == userPWChk) {
        $("span#span1").remove();
    }
    $("form").attr("method", "post");
    $("form").attr("action", "ms_signUpFinish.html");
    $("form").submit();


});

$("select#Email").change(function () {
    let selectValue = $(this).val();

    $("#emailAdress").val(selectValue);

});
