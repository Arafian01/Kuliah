$(document).ready(function () {
    $('#loading').fadeOut(1000);

    var n1 = Math.round(Math.random() * 10);
    var n2 = Math.round(Math.random() * 10);
    var captchai = n1 + " + " + n2;
    $('#img').text(captchai);
    $('#alert').hide();

    $("a").click(function () {
        $("#alert").hide();
    });

    $("#btnLogin").button().click(function () {
        var dbemail = "admin@gmail.com";
        var dbpass = "admin";
        var email = $("#inputEmail").val();
        var pass = $("#inputPassword").val();
        var captcha = $("#inputCaptcha").val();
        // var remember = $("gridCheck").checked;
        // var captcha3 = eval(captcha2);

        if (dbemail == email && dbpass == pass) {
            if (captcha == eval(captchai)) {
                $('#loading').show();
                setTimeout(function () {
                    $(location).attr('href', 'CV/cv-portofolio.html')
                }, 1000);
            } else {
                $("#pesan").text("ups! Captcha salah");
                $('#alert').fadeIn("slow");
            }
        } else {
            $("#pesan").text("email atau password salah!");
            $('#alert').fadeIn("slow");
        }
    })
});