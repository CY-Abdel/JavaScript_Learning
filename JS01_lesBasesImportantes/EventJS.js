/*var p = document.querySelector('p')
var rougit = function (){
	p.classList.add('red')
}
p.addEventListener('click', rougit )*/

/*var ps   = document.querySelectorAll('p')
for (let index = 0; index < ps.length; index++) {
    var p = ps[index]
    var rouge = function () {
        this.classList.toggle('red')
    }
    p.addEventListener('click', rouge)
}
*/

// Mettre le paragraphe en rouge avec la sourit en survolant sur le texte
/*var ps = document.querySelectorAll('p')
for(var i=0; i<ps.length; i++){
    var p = ps[i]
    p.addEventListener('mouseover', function(){
        this.classList.add('red')
    })
    p.addEventListener('mouseout', function(){
        this.classList.remove('red')
    })
}*/

// le texte clignote en rouge chaque 0.8sec
/*ps = document.querySelectorAll('p')
for (var i = 0; i < ps.length; i++) {
    (function(p) {
        window.setInterval(function () {
            p.classList.toggle('red')
        }, 800)
    })(ps[i])
}
*/

// elle permet de recuperer tout les liens 'a' dont la classe est nomée ici en exemple "a.external"
/*var liens = document.querySelectorAll('a.external')

for (var i = 0; i < liens.length; i++) {
    var lien = liens[i];
    lien.addEventListener('click', function(e) {
        // il evite de propager l'events au parents
        e.stopPropagation()
        console.log("j'ai clique sur le lien,", e)
        var rep = window.confirm('voulez vous quitter le site')
        if (rep === false) {
            // elle permet d'annuler un evenement
            // sinon la page va etre rederiger vers notre lien meme si on a cliquer sur annuler
            e.preventDefault()
        }
    })
}
*/

/*var ps = document.querySelectorAll('p')
for(var i=0; i<ps.length; i++){
    var p = ps[i];
    p.addEventListener('click', function (e) {
        
        // le console.log va rien afficher car on a executer
        // le e.stopPropagation dans la fonction precedente
        // dand le cas ou on retire le e.stopPagation le message va etre afficher
        
        console.log('j\'ai clique sur le paragraphe', e.currentTarget)
    })
}*/



// var p = document.querySelector('p') // selection le 1er paragraphe
// var clique = function(event) {
//     this.classList.add('red')
//     console.log("Rouge")
//     event.preventDefault()
//     chaque fois on clique il enleve l'ancien event sinon les eventslistner vont s'executer a chaque fois
//     p.removeEventListener('click', clique)
// }
// p.addEventListener('click', clique)

// keyup : lorsque on relach le bouton
// document.querySelector('#form').addEventListener('keyup', function(e){
//     console.log(e)
// })

//selection element dont le "id=form"
// keydown: lorsque on appuie sur une touche 
/*document.querySelector('#form').addEventListener('keydown', function (e) {
    var lettre = String.fromCharCode(e.keyCode)
    console.log(lettre)
    if (lettre != 'A'){
        // preventDefault annule l'execution (non soumise)
        // dans ce cas si la lettre est a elle va etre afficher 
        // sinon input reste unchangé mais avec le keyup ça fonctionne
        e.preventDefault()
    }
})*/

// document.querySelector('#form').addEventListener('submit', function (e) {
//     // pour recuperer la valeur du champs
//     // cb.value va nous donner ça valuer !
//     var cb = document.querySelector('#cb')
//     if (cb.value.length != 5) {
//         alert('le code postal est faux !')
//         e.preventDefault() // empeche la soummision du fprmulaire
//     }
// })

// document.querySelector('#form').addEventListener('submit', function (e) {
//     // pour recuperer la valeur du champs
//     // cb.value va nous donner ça valuer !
//     var mentions = document.querySelector('#mentions')
//     if (!mentions.checked) {
//         alert('vous n\'avez pas accepter les CGU')
//         e.preventDefault() // empeche la soummision du fprmulaire
//     }
// })

// demo.focus() : permet de mettre le focus sur le champs
var demo = document.querySelector('#demo')
demo.focus()

document.querySelector('#form').addEventListener('submit', function (e) {
        // selectedOptions montre les valeurs selectionner dans un tableau
        //selectedOptions[0].value ddonne la valeur de l'option
        //nb: on peut selectione plusieurs option (multioption dans le formulaire html)
        var age = parseInt(document.querySelector('#age').selectedOptions[0].value, 10)
        if (age < 18 ) {
            alert('tu es mineur')  
            e.preventDefault()
        }
    })


