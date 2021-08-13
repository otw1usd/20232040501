function bukatutup(){
    var x = document.getElementById("bukatutup"); //cari cara biar id nya bisa refer ke yg diclick
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  };