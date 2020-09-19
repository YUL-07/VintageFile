$(function () {
    $("#gnb>ul>li.mainLi").mouseover(function () {
        $("#gnb>ul>li.mainLi").children("ul").stop().slideDown("normal")
    });
    $("#gnb>ul>li").mouseout(function () {
        $("#gnb>ul>li").children("ul").stop().slideUp("normal")
    });
});

function sbm() {
    var uploadFlie = document.getElementById("uploadFile").value;

    // document.write("uploadFile : " + uploadFlie + "<br>");
    // var periodIdx = uploadFlie.lastIndexOf(".");
    // document.write("마침표 인덱스 : " + periodIdx + "<br>");
    // var ext = uploadFlie.substring(periodIdx + 1);
    // document.write("확장자 : " + ext + "<br>");

    var periodIdx = uploadFlie.lastIndexOf(".");
    var ext = uploadFlie.substring(periodIdx + 1);
    var comment = "";
    if (ext == "js") {
        comment = "<span style = 'color: red;'>js파일 업로드 불가</span>";
        document.getElementById("result").innerHTML = comment;
        return false;
    } else if (ext == "exe") {
        comment = "<span style = 'color: red;'>exe파일 업로드 불가</span>";
        document.getElementById("result").innerHTML = comment;
        return false;
    }else if (ext == "") {
        comment = "<span style = 'color: red;'>파일을 선택해주세요</span>";
        document.getElementById("result").innerHTML = comment;
        return false;
    } else {
        comment = "<span style = 'color: gray;'>업로드 완료</span>";
        document.getElementById("result").innerHTML = comment;
    }

}