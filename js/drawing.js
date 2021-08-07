const listGamtek = document.querySelector('.gamtek');
const zoomin = document.querySelector('.zoominbefore');
const zoomout = document.querySelector('.zoomoutbefore');

var zoomOnScreen = 0; //0 = list, atau kosong, atau gamtek blom dibuka
var locationOnScreen=0;
window.listGamtekSaya =0;

    

//buka button simple
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    };

//buka button construction drawing, nnti di upgrade ke location
    function gamtekSaya() {
      if(window.listGamtekSaya===0){
        
      // window.locationOnScreen=location;
      //bikin path gambar list
      //for (i=1;i<path.length,i++) {'masukin card jgn lupa diapus semua enter dan spasi'}
      //push location onscreen
      window.listGamtekSaya +=1;
      console.log(listGamtekSaya);

      document.querySelector('.loopingbatasgamtek').remove();
      document.querySelector('.popupgamtek').innerHTML+='<div class="loopingbatasgamtek"> </div>';

       

      for (i=1 ; i < 4 ; i++){
        
        document.querySelector('.loopingbatasgamtek').innerHTML+='<div class="card border-dark mb-3 row"><div class="card-header">Page'+i+'</div><div class="card-body text-dark"><div class="row"><div class="foto-gamtek col-10"><img src="drawing/'+window.locationOnScreen+'/list/list-Page'+i+'.png" alt="Page1" id="Page1" class="list"></div><div class="div-logo-kecil col-2"><img class="logo-kecil" src="img/download.png" alt="download"><br><img class="logo-kecil" src="img/print.png" alt="print"><br><img class="logo-kecil" src="img/share.png" alt="share"></div></div></div></div>';


      };



      var gamtek = document.getElementById("daftarGamtekSaya");
      gamtek.classList.toggle("buka");

      //cek kalo locationonscreen sama, berarti nutup, kalo beda berarti buka
    }
    else {
      window.listGamtekSaya -=1;
      document.querySelector('.loopingbatasgamtek').remove();
      document.querySelector('.popupgamtek').innerHTML+='<div class="loopingbatasgamtek"> </div>';
      var gamtek = document.getElementById("daftarGamtekSaya");
      gamtek.classList.toggle("buka");
      console.log(listGamtekSaya);



    }
    };




//kalo pencet dari list gamtek
listGamtek.addEventListener('click', function(e) {
  window.idOnScreen = e.target.id;

  if(window.zoomOnScreen === 0){
    zoomout.classList.remove("zoomoutbefore");
    zoomout.classList.add("zoomoutafter");
    zoomin.classList.remove("zoominbefore");
    zoomin.classList.add("zoominafter");
    window.zoomOnScreen =+1;
    window.rowfile = 7; //ini yang zos1
    window.colfile = 10; //ini yang zos1

    munculinTabel();
    


  }

// kalo list dipencet tpi udah ada yang kebuka
  else {
    munculinTabel();
  }
 
});

//fungsi general munculin gamtek
function munculinTabel (){
  document.querySelector('.gamtekfsbefore').remove();
  document.querySelector('.gamtekfs').innerHTML+='<div class="gamtekfsbefore"></div>';

      var table = document.createElement('table'), tr, td, row, cell;
        for (row = 0; row < window.rowfile; row++) {
          tr = document.createElement('tr');
          for (cell = 0; cell < window.colfile; cell++) {
              td = document.createElement('td');
              tr.appendChild(td);
              nomor = row * colfile + cell + 1;
              // path = "drawing/"+window.idOnScreen+"/z" + window.zoomOnScreen + "/"+nomor+'.png';
              path = "drawing/"+window.locationOnScreen+window.idOnScreen+"/z" + window.zoomOnScreen + "/"+nomor+'.png';
              //kalau udah bisa perlocation, ganti
              td.innerHTML = '<img src="'+path+'">';
              
          }
          table.appendChild(tr);
      }
      document.querySelector('.gamtekfsbefore').appendChild(table);
    };

//fungsi general apusin gamtek
function apusinTabel (){
  document.querySelector('.gamtekfsbefore').remove();
  document.querySelector('.gamtekfs').innerHTML+='<div class="gamtekfsbefore"></div>';
    };


//fungsi zoom out
    zoomout.addEventListener('click', function(e){
      window.zoomOnScreen-=1;
      if(zoomOnScreen === 2){
           window.rowfile = 7;
           window.colfile = 10;
           munculinTabel();
        }
        else if(zoomOnScreen === 1) {
           window.rowfile = 7;
           window.colfile = 10;
           munculinTabel();
        }
        else if(zoomOnScreen === 3) {
           window.rowfile = 7;
           window.colfile = 10;
           munculinTabel();
           //munculin zoomin class
           zoomin.classList.remove("zoominbefore");
           zoomin.classList.add("zoominafter");
        }
        else if(zoomOnScreen === 4) {
           window.rowfile = 7;
           window.colfile = 10;
           munculinTabel();
        }
        else if(zoomOnScreen === 0) {
           window.rowfile = 0;
           window.colfile = 0;
           apusinTabel();
           zoomout.classList.remove("zoomoutafter");
           zoomout.classList.add("zoomoutbefore");
           zoomin.classList.remove("zoominafter");
           zoomin.classList.add("zoominbefore");
        };
      
      
      

    console.log(window.zoomOnScreen);
    });



//fungsi zoom in
  zoomin.addEventListener('click', function(e) {
    
      window.zoomOnScreen+=1;
      if(zoomOnScreen === 2){
           window.rowfile = 7;
           window.colfile = 10;
        }
        else if(zoomOnScreen === 1) {
           window.rowfile = 7;
           window.colfile = 10;
        }
        else if(zoomOnScreen === 3) {
           window.rowfile = 7;
           window.colfile = 10;
        }
        else if(zoomOnScreen === 4) {
           window.rowfile = 7;
           window.colfile = 10;
           //apus zoomin class
           zoomin.classList.remove("zoominafter");
           zoomin.classList.add("zoominbefore");
        };
        
        
      
      
      munculinTabel();
      
    

  console.log(window.zoomOnScreen);
  });



