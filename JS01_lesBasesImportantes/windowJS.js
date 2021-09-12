/*   (function () {
	// window.alert("salut les gens !")
	// var demo = window.prompt("salut")
	// var demo = window.confirm("salut")
	var cle = Math.round(Math.random() * 10);
 	var demo = window.prompt('devine le chiffre secret')
 	demo = parseInt(demo, 10)
	while (demo != cle) {
		if (demo < cle) {
			// alert("petit")
			demo = window.prompt('le chiffre est petit')
		}
		else if (demo > cle) {
			// alert("grand")
			demo = window.prompt('le chiffre est grand')
		}
		// demo = window.prompt('devine le chiffre  secret')
	}
	alert("bravo !")
	console.log(cle) 
})()*/

(function () {
	var cle = Math.round(Math.random() * 10);
	var nbEssai = 3
	var demo
	for (var i = 0; i < 3; i++) {
		if ( i == 0) {
			demo = prompt('devine le chiffre secret')
		} else {
			demo = prompt('il vous reste ' + (nbEssai - i) + " tentative")
		}
		demo = parseInt(demo, 10)

		if (demo == cle){
			break;
		} else if (demo > cle) {
			demo = alert('grand')
		} else {
			demo = alert('petit')
		}
	}

	if (demo == cle) {
		alert("bravo !")
	} else {
		alert("echec !")
	} 

})()
