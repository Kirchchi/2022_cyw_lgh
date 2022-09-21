$(document).ready(function () {
    $("#login_id, #login_pw").keyup(function (e) {
        if (e.keyCode == 13) {
            var input_id = $("#login_id").val();
            var input_pw = $("#login_pw").val();

            if (input_id == 'admin' && input_pw == 'admin01') {
                location.href = '/html/index.html';
                return;
            }
            alert('아이디 또는 비밀번호를 확인 해주세요.');
            $("#login_id").val("");
            $("#login_pw").val("");
        }
    });

    $("#intro_login_btn").click(function (event) {
        var input_id = $("#login_id").val();
        var input_pw = $("#login_pw").val();

        if (input_id == 'admin' && input_pw == 'admin01') {
            location.href = '/html/index.html';
            return;
        }
        alert('아이디 또는 비밀번호를 확인 해주세요.');
        $("#login_id").val("");
        $("#login_pw").val("");
    });

    var key = getCookie("key");
    $("#login_id").val(key);

    if ($("#login_id").val() != "") {
        $("#saveId").attr("checked", true);
    }
    $("#saveId").change(function () {
        if ($("#saveId").is(":checked")) {
            setCookie("key", $("#login_id").val(), 7);
        } else {
            deleteCookie("key");
        }
    });
});

function setCookie(cookieName, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "=" + "; expires=" + expireDate.toGMTString();
}

function getCookie(cookieName) {
    cookieName = cookieName + "=";
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if (start != -1) {
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1)
            end = cookieData.length;
        console.log("end위치 : " + end);
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

// localStorage 활용하여 회원가입, 로그인 location 수정 필요