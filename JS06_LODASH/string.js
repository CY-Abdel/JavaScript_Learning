var demo = "   chougar   "

// pour supprimer les espaces aavant et apres la chaine de caractere
console.log(demo)
console.log(_.trim(demo))

demo = "000000041100000"
// si on souhaite supprimer les zeros on passe des param a la func trim
console.log(demo)
console.log(_.trim(demo, '0'))
console.log(_.trim(demo, '1'))

// pour rajouter des elements a une chaine
demo = '23'
console.log(demo)
	// on ajoute des espaces au debut et a la fin de la chaine, length = 6
console.log(_.pad(demo, 6))
	// on ajoute des trucs au debut et a la fin de la chaine, length = 7
console.log(_.pad(demo, 7, '0'))
	// on ajoute des Y au debut la chaine, length = 9
console.log(_.padStart(demo, 9, 'Y'))

demo = '1000'
console.log(demo)
console.log(_.padStart(demo,6, '0')) // il ajoute 2 zero au debut

demo = 'chougar juba'
console.log(demo)
// elle permet de mettre en majuscule le premier caractere de la chaine
console.log(_.capitalize(demo))
// remplacer les espaces par des underscores
console.log(_.snakeCase(demo))
// remplacer les espaces par des tiret de 6
demo = 'le kebabCase marche aussi sur un long paragraphe'
console.log(_.kebabCase(demo))

demo = '__foo_bar__'
//Lodash remplace les nderscor par des espaces quand il met tout en majuscule
console.log(_.upperCase(demo))
// la func toUpperCase() de JS elle garde les underscores
console.log(demo.toUpperCase())