var p = document.querySelector('p')
var rougit = function (){
	p.classList.add('red')
}
p.addEventListener('click', rougit )

/*var ps   = document.querySelectorAll('p')
for (let index = 0; index < ps.length; index++) {
    var p = ps[index]
    var rouge = function () {
        this.classList.toggle('red')
    }
    p.addEventListener('click', rouge)
}
*/


// for (var i = 0; i < ps.length; i++) {
//     (function(p) {
//         window.setInterval(function () {
//             p.classList.toggle('red')
//         }, 800)
//     })(ps[i])
// }

// var ps = document.querySelectorAll('p')
// for (let index = 0; index < ps.length; index++) {
//     var p = ps[index]
//     p.addEventListener('mouseover', function () {
//         this.classList.add('red')
//     })
//    p.addEventListener('mouseout', function () {
//         this.classList.remove('red')
//    })
// }

// var liens = document.querySelectorAll('a.external')

// for (var i = 0; i < liens.length; i++) {
//     var lien = liens[i];
//     lien.addEventListener('click', function (e) {
//         e.stopPropagation()
//         console.log("j'ai clique sur le lien,", e)
//         var rep = window.confirm('voulez vous vraiment quiter le site ?')
//         if(rep === false) {
//             e.preventDefault()
//         }
//     })
// }

// document.querySelector('p').addEventListener('click', function (e) {
//     console.log('j\'ai clique sur le paragraphe', e)
// })

// var p = document.querySelector('p')

// var clique = function(event) {
//     this.classList.add('red')
//     console.log("Rouge")
//     event.preventDefault()
//     p.removeEventListener('click', clique)
// }

// p.addEventListener('click', clique)

// document.querySelector('#a').addEventListener('keydown', function (e) {
//     var lettre = String.fromCharCode(e.keyCode)
//     if (lettre != 'A'){
//         e.preventDefault()
//     }
// })

// document.querySelector('#form').addEventListener('submit', function (e) {
//     var cb = document.querySelector('#cb')
//     if (!cb.checked) {
//         alert('non cocher')
//         e.preventDefault()
//     }
// })

/*var demo = document.querySelector('#demo')
demo.focus()

document.querySelector('#form').addEventListener('submit', function (e) {
        var age = parseInt(document.querySelector('#age').selectedOptions[0].value, 10)
        if (age < 18 ) {
            alert('tu es mineur')  
            e.preventDefault()
        }
    })*/