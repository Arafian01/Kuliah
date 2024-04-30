$(document).ready(function () {
    var n1 = Math.round(Math.random() * 10);
    var n2 = Math.round(Math.random() * 10);
    var captchai = n1 + " + " + n2;
    // alert(n1 + " + " + n2);
    $('#img').text(captchai);
    $('#alert').hide();
    
    $("a").click(function(){
        $("#alert").hide();
    });

    $("#btnLogin").button().click(function () {
        // console.log(eval(captcha2));
        var dbemail = "admin@gmail.com";
        var dbpass = "admin";
        var email = $("#inputEmail").val();
        var pass = $("#inputPassword").val();
        var captcha = $("#inputCaptcha").val();
        // var remember = $("gridCheck").checked;
        // var captcha3 = eval(captcha2);


        if (dbemail == email && dbpass == pass) {
            if(captcha == eval(captchai)){
                $(location).attr('href','https://Arafian01.github.io')
                $("#pesan").text("Login berhasil!");
                $('#alert').show(300);
            } else {
            $("#pesan").text("ups! Captcha salah");
            $('#alert').show(300);
            }
        } else {
            $("#pesan").text("email atau password salah!");
            $('#alert').show(300);
        }
        // else if (dbemail == email && dbpass == pass && captcha != eval(captcha2) ) {
        //     $("#modal").show();
        //     $("#pesan").text("ups! Captcha salah");
        //     console.log("berhasil");
        // } else if (dbemail != email || dbpass != pass) {
        //     $("#pesan").text("email atau password salah!");
        //     $("#modal").show();

        // if (remember == true && login === "Berhasil") {
        //     console.log("Email : " + email);
        //     console.log("password : " + pass);
        // } else {
        //     login = "Gagal";
        // }
    })
});

// captchai = document.getElementById("img");
// let uniquechar = "";

// const randomchar =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// // Generate captcha for length of
// // 5 with random character
// for (let i = 1; i < 8; i++) {
//     uniquechar += randomchar.charAt(
//         Math.random() * randomchar.length)
// }

// // Store generated input
// captchai.innerHTML = uniquechar;
// console.log(uniquechar);

// function login() {
//     var dbemail = "admin@gmail.com";
//     var dbpass = "admin";
//     var email = document.getElementById("inputEmail").value;
//     var pass = document.getElementById("inputPassword").value;
//     var captcha = document.getElementById("inputCaptcha").value;
//     var remember = document.getElementById("gridCheck").checked;
//     var login;

//     if (dbemail === email && dbpass === pass && captcha === uniquechar) {
//         document.getElementById("pesan").innerHTML = "Login sukses";
//         login = "Berhasil";
//     } else if (dbemail === email && dbpass === pass && captcha != uniquechar) {
//         document.getElementById("pesan").innerHTML = "ups! Captcha salah";
//     } else if (dbemail != email || dbpass != pass) {
//         document.getElementById("pesan").innerHTML = "email atau password salah!";
//     }

//     if (remember == true && login === "Berhasil") {
//         console.log("Email : " + email);
//         console.log("password : " + pass);
//     } else {
//         login = "Gagal";
//     }
// }