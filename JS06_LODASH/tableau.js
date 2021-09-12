
var tab1 = [1, 2, 3]

var tab2 = [4, 5]

console.log(_.concat(tab1, tab2, 8, 9))

console.log(_.without(tab1, 2))

var comment = {username: 'Jhon', content: "Salut"}

var tab = [1, comment, 3]

console.log(tab)
console.log(_.without(tab, comment))

console.log("\nFilter")
tab = [1, 2, 3]
console.log(tab)
console.log(_.filter(tab, function (element) {
    return element > 1
}))

console.log("\nArray")
users = [
    {'user': 'Jhon', age: 40, 'active':false },
    {'user': 'Youva', age: 36, 'active':true },
    {'user': 'Sugar', age: 1, 'active': true }
]
console.log(_.filter(users, function (user) {
    return user.active
}))
console.log(_.filter(users,{active: false}))

console.log("\nfind")
console.log(_.find(users,{active: false}))

console.log("\norderBY")
console.log(_.orderBy(users, ['user'], ['asc']))
console.log(_.orderBy(users, ['age'], ['desc']))

users2 = [
    {'user': 'Jhon', age: 40, 'active':false },
    {'user': 'Youva', age: 36, 'active':true },
    {'user': 'Sugar', age: 1, 'active': true }
]
console.log("\nmap")
console.log(_.map(users2, function (user) {
    user.age *= 2
    return user
}))
console.log(" \nforeach ")
_.forEach(users, function (user, key) {
    console.log(key, '=>', user.user)
});


_.forEach(users2, function(user){
    _.forEach(user, function (value, key) {
        console.log(key, '=>', value)
    });
});

console.log(" \nrandom ")
console.log(_.sample(users))
console.log(_.sampleSize(users,2))

console.log(_.groupBy(users, function (user) {
    return user.user.substr(0, 1)
}))

console.log(" \nSizeLengthKey ")
var user = users[0]
console.log(Object.keys(user).length)
console.log(_.size(user))

console.log(" \nCloner ")
var user2 = _.clone(user)
user2.age *= 3
console.log(user)
console.log(user2)

console.log(" \n_.assigne")
_.assign(user2, {active: true, age: 15})
console.log("user2 = " ,user2)

var user3 = _.assign({}, user, {active: true, age: 19})
console.log("user3 = " , user3)
console.log("user = " , user)

console.log(" \n_.unset")
var user4 = _.clone(user)
_.unset(user4, 'age')
console.log("user4 = " , user4)
console.log("user = " , user)







console.log(" ")