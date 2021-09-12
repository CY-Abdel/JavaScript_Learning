var phrase ="Une phrase qui sert a compter le nombre de mot dans un paragraphe, de calculer le fréquence des ces mots, c'est cool :)"

var frequence = function(phrase){
	var mots = phrase.toLowerCase().split(" ")	
	var compteur = {}

	for (var i=0; i<mots.length; i++){
		var mot = mots[i]
		if (compteur[mot] === undefined){
			compteur[mot] = 1 
		} else {
			compteur[mot]++
		}
	}
	return compteur	
}

var eleve1 = {
	nom: 'Jean',
	notes: [15, 16, 18, 2]
}

var eleve2 = {
	nom: 'Marc',
	notes: [5, 18, 20, 19]
}

var moyenne = function(notes){
	var somme = 0
	for (var i=0; i<notes.length; i++){
		somme += notes[i]
	}
	return somme / notes.length
}

var estMeilleur = function(a, b){
	return moyenne(a.notes) > moyenne(b.notes)
}

console.log(estMeilleur(eleve1,eleve2))
