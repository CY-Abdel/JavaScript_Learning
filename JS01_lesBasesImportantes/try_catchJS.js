// var a = {}

// try {
// 	a.mamethide()
// } catch(e) {
	 
// 	console.log("la méthode n'éxiste pas \n\n\t" + e) ;
// }
	
console.log("salut")

var demo = function (nombre) {
	if (nombre >5) {
		throw new Error("le nombre ne peut etre > a 5")
	}

	return nombre *2
}

try {
	demo (6)
} catch(e) {
	// statements
	console.log(e);
}
var double  = function (nombre) {
	var resultat = nombre * 2
	if (Number.isNaN(resultat)){
		throw new Error("le nombre donné n'est pas un chiffre")
	}
	return resultat
}

try {
 	// statements
 	console.log(double("aziz"))
 } catch(e) {
 	// statements
 	console.log("aziz is not a number : " + e);
 } 

console.log(double(12))
console.log(double("aziz"))
