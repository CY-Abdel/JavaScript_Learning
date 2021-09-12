
//setIntervall execute le code apres chaque duree de temps donnéé
// par exmple chaque 1000 miliEseconde = 1seconde
/*(function () {
	var demo = function () {
		console.log('demo')
	}

	window.setInterval(demo, 1000)
	console.log("aziz")
})()*/

/*(function () {
	window.setInterval(function () {
		console.log('timer')
	}, 1000)
	console.log("aziz")
})()*/

/*(function(){
	var i = 0 
	window.setInterval(function () {
		i++
		console.log(i)
	}, 1000)
	console.log("aziz")
})()*/

// setTimeout execute une fois seulement
/*(function () {
	var i = 0
	window.setTimeout(function () {
		i++
		console.log(i)}, 500)
	console.log("aziz")
})()*/

// clearInterval stop setInterval 
// (function () {
// 	var i = 0
// 	var timer = window.setInterval(function () {
// 		i++
// 		console.log(i)
// 		if (i === 10) {
// 			window.clearInterval(timer)
// 		}
// 	}, 300)
// 	console.log("timer")
// })()

/*(function () {
	for (var i = 0; i < 10; i++) {
			window.setTimeout(function () {
				console.log(i)
			}, 1000)
	}
})()*/

(function () {
	for (var i = 0; i < 10; i++) {
		(function (i) {
			window.setTimeout(function () {
				console.log(i)
			}, 500)
		})(i)
	}
})()
