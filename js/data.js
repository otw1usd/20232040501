$.getJSON('data.json', function (data) {
	let depo = data.depo;
	console.log(depo);
	console.log(data);

	//method untuk melakukan pengulangan
	//dia akan looping sebanyak datanya
	//ambil setiap elemen dalam depo, kemudian tiap elemen dalam depo lakukan fungsi

	// parameternya ada index (yaitu data ke berapa) dan datanya
	$.each(depo, function(i, data){
		//jquery carikan data yang idnya z2-Page2
		//append itu menambahkan elemen baru di akhir
		//ilangin semua enter dan spasisupaya jadi string
		//petik satu buat di js, petik 2 di html 
		$('#fotofoto').append('<img src="drawing/Page2/z2/'+data.dir+'">;');


	});

	


});

console.log(123456);