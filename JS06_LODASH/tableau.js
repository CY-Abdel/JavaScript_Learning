
var tab1 = [1, 2, 6, 3]

var tab2 = [4, 5]

//Fusionner ou concatiner des tableaux avec lodash
console.log(_.concat(tab1, tab2))

//ajouter des arguments a des tab concatiner
console.log(_.concat(tab1, tab2, 9, 23))

// supprimer un element d'un tab
console.log(_.without(tab1, 6))

// _.without foncitone aussi avec les objets
var comment = {username: 'chougar', content: "Salut"}
var tab = ['Y', comment, 23]
console.log(_.without(tab))
console.log(_.without(tab, comment))

// filtrer un tableau
console.log("\nFilter un tab")
tab = [1, 2, 3 , 9]
console.log(tab)
console.log(_.filter(tab, function(element){
   return element > 2 // renvoi un tab dont les elements sont > a 2
}))

console.log("\nArray filters")

var users = [
    {'user': 'chougar', 'age' :27, 'active' : false},
    {'user': 'aziz', 'age' :21, 'active' : true},
    {'user': 'aziz', 'age' :29, 'active' : true},
    {'user': 'mel', 'age' :23, 'active' : true}
]
console.log(_.filter(users, function(user) {
    return user.active
}))

console.log(_.filter(users, {active : false}))

console.log("\nfind : retourne le 1er element qui ressemble a notre cretere")
console.log(_.find(users, {active: false}))
console.log(_.find(users, {active: true}))

console.log("\norderBY")
console.log(_.orderBy(users, 'user','asc'))
console.log(_.orderBy(users, ['age'], ['desc']))

// si 2 user on le meme noom on ordonne par age desc ds ca cas la
console.log(_.orderBy(users, ['user','age'], ['asc','desc']))

console.log("\nmap")

users2 = [
    {'user': 'Jhon', age: 20, 'active':false },
    {'user': 'Youva', age: 26, 'active':true },
    {'user': 'Sugar', age: 1, 'active': true }
]

console.log(_.map(users2, function (user){
    user.age *= 2
    return user
}))

console.log(" \nforeach ")
_.forEach(users, function(user, key) {
    console.log(key, "=>", user.user)
})

console.log(" \nforeach ")
_.forEach(users[0], function (value, key) {
    console.log(key, '=>', value)
});

console.log(" \nforeach ")
_.forEach(users2, function(user){
    _.forEach(user, function (value, key) {
        console.log(key, '=>', value)
    });
});

console.log(" \nrandom ")
console.log(_.sample(users))
// pour recuperer deux ou plus aleatoire
console.log(_.sampleSize(users, 2))
console.log(_.sampleSize(users, 3))

console.log(" \ngroupeBy ")
console.log(_.groupBy(users, function(user) {
    return user.user.substr(0, 1)
})) 

console.log(" \nSizeLengthKey ")
var user = users[0]
console.log('user ', user)
// avec JavaScript
console.log(Object.keys(user).length)
// avec lodash
console.log(_.size(user))

console.log(" \nCloner ")

// dans ce cas la meme le iser va etre changer nous on veut changer que le users2
/*
var user = users[0]
console.log('user = ', user)
var user2 = user
user2.age *= 3
console.log('user = ', user)
*/

var user = users[0]
var user2 = _.clone(user)
user2.age *= 3
console.log('user = ',user)
console.log('user2 = ',user2)

console.log(" \n_.assigne")
_.assign(user2, {active : true})
console.log("user2 = " ,user2)
_.assign(user2, {active: false, age: 27})
console.log("user2 = " ,user2)

console.log(" \n")
var user3 = _.assign({}, user, {active: true, age: 25}) 
console.log("user3 = " , user3)
console.log("user = " , user)

console.log(" \n_.unset")

var user4 = _.clone(user)
console.log("user4 = " , user4)
console.log("user = " , user)

console.log(" \n")
_.unset(user4, 'age')
console.log("user = " , user)
console.log("user4 = " , user4) 

console.log(" \n")
var user5 = _.assign({}, user, {user: {firstname: 'juba', lastname: 'chougar'}})
console.log("user = " , user)
console.log("user5 = " , user5)
console.log(" \n")

_.unset(user5, 'user.lastname') 
console.log("user = " , user)
console.log("user5 = " , user5)

