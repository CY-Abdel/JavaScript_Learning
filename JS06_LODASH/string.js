
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
