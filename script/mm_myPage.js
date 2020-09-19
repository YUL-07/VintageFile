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

    var yearData = "";
    var yearData = "<option>Year</option>";
    while (thisYear >= 1940) {
        if (thisYear == 1995) {
            yearData += "<option selected>" + thisYear + "</option>";
        } else {
            yearData += "<option>" + thisYear + "</option>";
        }
        thisYear--;
    }
    document.getElementById("birthYear").innerHTML = yearData;
    //select option 연도 입력 끝

    //select option 월 입력 시작
    var thisMonth = 1;
    var monthData = "";
    var monthData = "<option>Month</option>";
    while (thisMonth <= 12) {
        if (thisMonth == 7) {
            monthData += "<option selected>" + thisMonth + "</option>";
        } else {
            monthData += "<option >" + thisMonth + "</option>";
        }
        thisMonth++;
    }
    document.getElementById("birthMonth").innerHTML = monthData;
    //select option 월 입력 끝

    // select option 일 입력 시작
    var thisDay = 1;
    var dayData = "";
    var dayData = "<option>Day</option>";
    while (thisDay <= 31) {
        if (thisDay == 21) {
            dayData += "<option selected>" + thisDay + "</option>";
        } else {
            dayData += "<option>" + thisDay + "</option>";
        }
        thisDay++;
    }
    document.getElementById("birthDay").innerHTML = dayData;
    // select option 일 입력 끝
});

$("#chkBtn").click(function () {
    let userPW = $("#userPW").val();
    let userPWChk = $("#userPWChk").val();
    let userPH = $("#userPH").val();
    let userE = $("#userE").val();
    let emailAdress = $("#emailAdress").val();

    if (userPW == "" || userPWChk == "" || userPH == "" || userE == "" || emailAdress == "") {
        if ($("span#span1").length == 0) {
            $(".requirement").after("<span id='span1'>*필수</span>");
        }
        return false;
    } else if (userPW != "" && userPWChk != "" && userPH != "" && userE != "" && emailAdress != "") {
        $("#span1").remove();
    }
    $("form").attr("method", "post");
    alert("회원정보가 수정되었습니다");
    $("form").attr("action", "ml_loginMainpage.html");
    $("form").submit();
});


$(function () {
    $(userPH).val("01097211793");
    $(userE).val("yul721");
    $(emailAdress).val("kakao.com");
})


$("select#Email").change(function(){
    let selectValue = $(this).val();

    $("#emailAdress").val(selectValue);
    
});