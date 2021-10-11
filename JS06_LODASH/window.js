
var user = {active : true, age : 3}
console.log (user)

var user2 = _.clone(user)
_.set(user2, 'user.firstname', 'aziz')
console.log ("user2 = ",user2)

var user3 = _.clone(user)
_.set(user3, 'user.0.firstname', 'juba' )
console.log("\nuser3 = ", user3)

var user5 = {active: true, age :3}
if (_.get(user5, 'user.firstname', false) === 'demo')
    console.log("ok")

var user6 = {user: {firstname: 'demo'}, active: true, age :3}
if (_.get(user6, 'user.firstname', false) === 'demo')
    console.log("ok")

// window.addEventListener('scroll', function() {
//     console.log('je scrole')
// })

// dans ce cas chaque fois on scrolle la funct sera executer

/*window.addEventListener('scroll', function () {
    console.log('avec throtle')
})*/


// la fct scrolle sera executer chase 200ms quand on scrolle
/*window.addEventListener('scroll', _.debounce(function() {
    console.log("sans throttle")
}, 200))*/

window.addEventListener('scroll', _.throttle(function() {
    console.log("je scrole")
}, 200))
