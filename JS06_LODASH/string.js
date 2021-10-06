var demo = "   chougar   "

// pour supprimer les espaces aavant et apres la chaine de caractere
console.log(demo)
console.log(_.trim(demo))

demo = "000000041100000"
// si on souhaite supprimer les zeros on passe des param a la func trim
console.log(demo)
console.log(_.trim(demo, '0'))
console.log(_.trim(demo, '1'))


/*
var demo = '   aziz    '
console.log(demo)
console.log(_.trim(demo))

demo = "000000041100000"
console.log(demo)
console.log(_.trim(demo, '0'))

demo = '01'
console.log(demo)
console.log(_.padStart(demo,6, '0'))

demo = '1000'
console.log(demo)
console.log(_.padStart(demo,6, '0'))

demo = 'john doe'
console.log(demo)
console.log(_.capitalize(demo))

demo = 'john suis une url intéréssante'
console.log(demo)
console.log(_.snakeCase(demo))
console.log(_.kebabCase(demo))

demo = '__foo_bar__'
console.log(_.upperCase(demo))
console.log(demo.toUpperCase())
*/