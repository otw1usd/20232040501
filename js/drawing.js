const listGamtek = document.querySelector('.gamtek');
const zoomin = document.querySelector('.zoominbefore');
const zoomout = document.querySelector('.zoomoutbefore');

var zoomOnScreen = 0; //0 = list, atau kosong, atau gamtek blom dibuka

    

//buka button simple
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    };

//buka button construction drawing, nnti di upgrade ke location
    function gamtekSaya() {
      var gamtek = document.getElementById("daftarGamtekSaya");
      gamtek.classList.toggle("buka");
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
            path = "drawing/"+window.idOnScreen+"/z" + window.zoomOnScreen + "/"+nomor+'.png';
              
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



