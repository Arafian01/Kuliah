captchai = document.getElementById("img");
    let uniquechar = "";

    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 8; i++) {
      uniquechar += randomchar.charAt(
        Math.random() * randomchar.length)
    }

    // Store generated input
    captchai.innerHTML = uniquechar;
    console.log(uniquechar);

    function login() {
      var dbemail = "admin@gmail.com";
      var dbpass = "admin";
      var email = document.getElementById("inputEmail").value;
      var pass = document.getElementById("inputPassword").value;
      var captcha = document.getElementById("inputCaptcha").value;
      var remember = document.getElementById("gridCheck").checked;
      var login;

      if (dbemail === email && dbpass === pass && captcha === uniquechar) {
        document.getElementById("pesan").innerHTML = "Login sukses";
        login = "Berhasil";
      } else if (dbemail === email && dbpass === pass && captcha != uniquechar) {
        document.getElementById("pesan").innerHTML = "ups! Captcha salah";
      } else if (dbemail != email || dbpass != pass) {
        document.getElementById("pesan").innerHTML = "email atau password salah!";
      }

      if (remember == true && login === "Berhasil") {
        console.log("Email : " + email);
        console.log("password : " + pass);
      } else {
        login = "Gagal";
      }


    }