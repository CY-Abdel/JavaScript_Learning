// var eleve = {
// 	moyenne: function () {
// 		var somme = 0
// 		for(var i = 0; i < this.notes.length; i++){
// 			somme += this.notes[i]
// 		}
// 		return somme / this.notes.length
// 	},
// 	present: function () {
// 		console.log(this.nom + " est present")
// 	}
// }

// var jean = {
// 	nom: 'Jean',
// 	notes: [10, 12]
// } 

// var marc = {
// 	nom: 'Marc',
// 	notes: [16, 17]
// }

var Eleve = function (nom, notes) {
	if (notes != undefined) {
		this.notes = notes
	}
	this.nom = nom
}

Eleve.prototype.moyenne = function () {
	if (this.notes === undefined) {
		return NaN
	}
	var somme = 0
	for(var i = 0; i < this.notes.length; i++){
		somme += this.notes[i]
	}
	return somme / this.notes.length
}

var jean = new Eleve('Jean', [10, 14])
var marc = new Eleve('Marc')