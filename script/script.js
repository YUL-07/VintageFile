$(function () {
    $("#gnb>ul>li.mainLi").mouseover(function () {
        $("#gnb>ul>li.mainLi").children("ul").stop().slideDown("normal")
    });
    $("#gnb>ul>li").mouseout(function () {
        $("#gnb>ul>li").children("ul").stop().slideUp("normal")
    });
});


let now = 0;
let imgsCnt = 3;
let matchValue = 0;

slideStart();

function slideStart() {
    setInterval(slideShow, 4000);
}

function slideShow() {
    now = now == imgsCnt ? now = 0 : ++now;
    $("#slideShow img").eq(now - 1).css({
        "margin-left": "-1920px",
        "transition": "all 2s"
    });
    $("#slideShow img").eq(now).css({
        "margin-left": "0px",
        "transition": "all 2s"
    });
    for (let i = 0; i <= imgsCnt; i++) {
        matchValue++;
        if (i == imgsCnt) matchValue = 0;
        if (now == i) {
            $("#slideShow img").eq(matchValue).css({
                "margin-left": "1920px",
                "transition": "none"
            });
        }
    }
}


// posters 버튼 시작

var liWidth = $("#posters").find("ul").children().outerWidth();
/* li 태그 개별 폭  */
// $("#resWidth").text("liWidth : " + liWidth);
var liLen = $("#posters").find("ul").children().length;
// $("#resLen").text("liLen : " + liLen);

/* li 태그 전체 개수 */

slideStarted();

var slideRollRun;
function slideStarted() {
    slideRollRun = setInterval(function () {
        slideRoll();
    }, 3000);

    $(function () {
        $("div.slidePoster").click(function () {
            let linkValue = $(this).attr("data-Link");
            $("#" + linkValue).css({ "display": "block" });
        });
    
        $("span.closeBtn").click(function () {
            $("div.posterInfo").css({ "display": "none" })
        });
    
    });
}

function slideRoll() {
    $("#posters")
        .children("ul")
        .animate(
            { "left": - liWidth + "px" },
            2000,
            "swing",
            function () {
                $(this).css({ "left": "0px" });
                let liMove = "<li>" + $(this).find("li:first-child").html() + "</li>";
                $(this).append(liMove);
                $(this).find("li:first-child").remove();
            });
}


/* Prev & Next  버튼 시작 */
$("#posters").children("ul").mouseover(function () {
    clearInterval(slideRollRun);
});   // slideRoll 멈춤

$("#posters").children("ul").mouseout(function () {
    slideStarted();
});   // slideRoll 재실행

$("#slidePosters #prevBtn").click(function () {

    $("#posters")
        .children("ul")
        .animate(
            { "left": liWidth + "px" },
            2000,
            "swing",
            function () {
                $(this).css({ "left": "0px" });
                let liMove = "<li>" + $(this).find("li:last-child").html() + "</li>";
                $(this).prepend(liMove);
                $(this).find("li:last-child").remove();
            });

}); // 이전(prev) 버튼 실행

$("#slidePosters #nextBtn").click(function () {
    slideRoll();
}); // 다음(next) 버튼 실행
/* Prev & Next  버튼 끝 */

// posters 버튼 끝



// tab 기능 시작




$(function () {
    $("div#tab>button").click(function () {
        let linkNotice = $(this).attr("data-Link");

        $(".linkReset").css({ "display": "none" });
        $("#" + linkNotice).css({ "display": "block" });

        $("div#tab>button").removeClass("tabOn");
        $(this).addClass("tabOn");
    });
});
// tab 기능 끝