    const listGamtek = document.querySelector('.gamtek');
    const omgomgfs = document.querySelector('.gamtekfslogobefore');
    const gamtekFullScreen = document.querySelector('.gamtekfsbefore');
    const gamtekz2html = document.querySelector('.gamtekz2htmlbefore');
    const logoback = document.querySelector('.gamtekfslogobackbefore');
    window.z2OnScreen = 0;
    window.fsOnScreen = 0;



    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");


    };


    function gamtekSaya() {
      var gamtek = document.getElementById("daftarGamtekSaya");
      gamtek.classList.toggle("buka");


    };

    listGamtek.addEventListener('click', function(e) {


      //buat pencet list untuk fs tapi dari layar 0, atau buat pencet list tapi lagi z2
      if (window.fsOnScreen === 0) {
        path = "drawing/Original PNG/z1-" + e.target.id + ".png";
        gamtekFullScreen.src = path;
        window.idOnScreen = e.target.id;

        //buat pencet list tapi lagi z2
        if (window.z2OnScreen === 1) {


          path = "drawing/" + window.idOnScreen + "/index.html";
          gamtekz2html.src = path;

        }

        //buat pencet list untuk fs tapi dari layar 0
        else {
          window.fsOnScreen = 1;
          gamtekFullScreen.classList.remove("gamtekfsbefore");

          gamtekFullScreen.classList.add("gamtekfsafter");
          omgomgfs.classList.toggle("gamtekfslogoafter");
          logoback.classList.toggle("gamtekfslogobackafter");
        };
      }

      // buat kalo dari layar fs ganti page
      else if (window.fsOnScreen === 1) {
        path = "drawing/Original PNG/z1-" + e.target.id + ".png";
        gamtekFullScreen.src = path;

      }



    });

    omgomgfs.addEventListener('click', function(e) {

      if (window.z2OnScreen === 0) {
        window.z2OnScreen = 1;


        omgomgfs.src = "img/z2out.png";

        gamtekFullScreen.classList.remove("gamtekfsafter");
        gamtekz2html.classList.toggle("gamtekz2htmlbefore");

        path = "drawing/" + window.idOnScreen + "/index.html";
        gamtekz2html.src = path;

        gamtekz2html.classList.toggle("gamtekz2htmlafter");
        gamtekFullScreen.classList.add("gamtekfsbefore");
        window.fsOnScreen = 0;
        logoback.classList.remove("gamtekfslogobackafter");
        logoback.classList.add("gamtekfslogobackbefore");


      } else {
        window.z2OnScreen = 0;

        gamtekFullScreen.classList.toggle("gamtekfsbefore");
        gamtekz2html.classList.toggle("gamtekz2htmlafter");

        path = "drawing/" + window.idOnScreen + "/index.html";
        gamtekz2html.src = path;

        gamtekz2html.classList.toggle("gamtekz2htmlbefore");
        gamtekFullScreen.classList.toggle("gamtekfsafter");
        window.fsOnScreen = 1;
        logoback.classList.remove("gamtekfslogobackbefore");
        logoback.classList.add("gamtekfslogobackafter");
        omgomgfs.src = "img/z2in.png";


        ;

      }



    });

    logoback.addEventListener('click', function(e) {
      gamtekFullScreen.classList.toggle("gamtekfsafter");
      gamtekFullScreen.classList.toggle("gamtekfsbefore");
      window.fsOnScreen = 0;
      logoback.classList.remove("gamtekfslogobackafter");
      logoback.classList.add("gamtekfslogobackbefore");
      omgomgfs.classList.remove("gamtekfslogoafter");
      omgomgfs.classList.add("gamtekfslogobefore");


    });