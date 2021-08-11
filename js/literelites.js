function martinganteng(location){
	console.log(location);
};



//SI ANJ GABISA COUNT
// const fs = require('fs');
// const dir="drawing/KM-301/list";

// fs.readdir(dir,(err,files)=> {
// 	console.log(files.length);
// });






// const zoomin = document.querySelector('.zoomin');
// const zoomout = document.querySelector('.zoomout');
// const listGamtek = document.querySelector('.gamtek');
// var zoomOnScreen = 0 ;

// //zoomOnScreen = 0 -> belom buka zoom
// //zoomOnScreen = 1 -> (.. x ..) buka zoom pertama

// window.idOnScreen = "Page2";


// //fungsi general munculin gamtek
// function munculinTabel (){
// 	document.querySelector('.gamtekfsbefore').remove();

// 			var table = document.createElement('table'), tr, td, row, cell;
// 				for (row = 0; row < window.rowfile; row++) {
// 			    tr = document.createElement('tr');
// 			    for (cell = 0; cell < window.colfile; cell++) {
// 			        td = document.createElement('td');
// 			        tr.appendChild(td);
// 			        nomor = row * colfile + cell + 1;
// 			    	path = "drawing/"+window.idOnScreen+"/z" + window.zoomOnScreen + "/"+nomor+'.png';
			        
// 			        td.innerHTML = '<div class="gamtekfsbefore"><img src="'+path+'"></div>';
			        
// 			    }
// 			    table.appendChild(tr);
// 			}
// 			document.querySelector('.gamtekfs').appendChild(table);
// 		};

// //fungsi general apusin gamtek
// function apusinTabel (){
// 	document.querySelector('.gamtekfsbefore').remove();
// 	document.querySelector('.gamtekfs').innerHTML+='<div class="gamtekfsbefore"></div>';
// 		};


// //fungsi zoom out
//   	zoomout.addEventListener('click', function(e){
//   		window.zoomOnScreen-=1;
//   		if(zoomOnScreen === 2){
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 					 munculinTabel();
// 				}
// 				else if(zoomOnScreen === 1) {
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 					 munculinTabel();
// 				}
// 				else if(zoomOnScreen === 3) {
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 					 munculinTabel();
// 					 //munculin zoomout class
// 				}
// 				else if(zoomOnScreen === 4) {
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 					 munculinTabel();
// 				}
// 				else if(zoomOnScreen === 0) {
// 					 window.rowfile = 0;
// 					 window.colfile = 0;
// 					 apusinTabel();
// 					 //apus zoom in
// 					 //apus zoom out
// 				};
			
			
			

// 		console.log(window.zoomOnScreen);
//   	});



// //fungsi zoom in
// 	zoomin.addEventListener('click', function(e) {
		
// 			window.zoomOnScreen+=1;
// 			if(zoomOnScreen === 2){
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 				}
// 				else if(zoomOnScreen === 1) {
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 				}
// 				else if(zoomOnScreen === 3) {
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 				}
// 				else if(zoomOnScreen === 4) {
// 					 window.rowfile = 7;
// 					 window.colfile = 10;
// 					 //apus zoomin class
// 				};
				
				
			
			
// 			munculinTabel();
			
		

// 	console.log(window.zoomOnScreen);
// 	});



// //next level javascript
// // function make(tag, content) {
// 		//   const el = document.createElement(tag);
// 		//   content.forEach(c => el.appendChild(c));
// 		//   return el;
// 		// }

// 		// document.getElementById("container").appendChild(make(
// 		//     "table", [...Array(10).keys()].map(row => make(
// 		//       "tr", [...Array(22).keys()].map(column => make(
// 		//         "td", [document.createTextNode(row * 22 + column + 1)]
// 		//     ))
// 		//   ))
// 		// ));