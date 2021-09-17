var links = document.querySelectorAll('.meteo')
var result = document.getElementById('result')


for (var i = 0; i < links.length; i++) {
    var link = links[i]
    link.addEventListener('click', function(e) {
        // pour eviter de rederiger vers un liens quand on click
        e.preventDefault()
        // cette partie va s'afficher si la connexion est lente
        // pour tester : ctrl+shift+i => network => no throttling => GRPS => actualiser
        result.innerHTML = 'chargement ...'
        // instancier avant d'appeler la page pour recuperer ce qu'on l'on veut
        var httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4){
                // on met vide dans la chaine de carac dans la div nulle
                result.innerHTML = ""
                // si tout ce passe bien le serveur renvoi statut 200
                if (httpRequest.status === 200) {
                    // document.getElementById('result').innerHTML = httpRequest.responseText
                    // result.innerHTML = httpRequest.responseText
                    // si on recupere du contenu JSON
                    var results = JSON.parse(httpRequest.responseText)
                    var ul = document.createElement('ul')
                    // on ajoute ul a la div qui a la classe result
                    result.appendChild(ul)
                    for (var i = 0; i < results.length; i++) {
                        var li = document.createElement('li')
                        li.innerHTML = results[i].name
                        // on aout ce li ou ul
                        ul.appendChild(li)
                    }
                } else {
                    // si on fait  httpRequest.open() qui renvoi rien alors
                    alert('impossible dae contacter le serveur !')
                }
            }
        }   

        //     appeler une page sur le serveur
        //     en mode GET ou POST ou autre
        //     sur la page ajax.php
        // httpRequest.open('GET','ajax.php?city=montpellier',true)
        //si on veut recuperer par attribut et non par une seule ville
        // httpRequest.open('GET', this.getAttribute('href'),true)
        //https://jsonplaceholder.typicode.com creer des faux files json quand va appeler
        httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
        // pas besoin de parametre pour send() car on recupere avec GET depuis l'URL
        httpRequest.send()
    })
}


// var links = document.querySelectorAll('.meteo')
// var result = document.getElementById('result')

// for (var i = 0; i < links.length; i++) {
//     var link = links[i]

//     link.addEventListener('click', function (e) {
//         e.preventDefault()  
//         result.innerHTML = "Chargement..."  
//         var httpRequest = new XMLHttpRequest()
        
//         httpRequest.onreadystatechange = function () {
//             if (httpRequest.readyState === 4) { 
//                 result.innerHTML = ''
//                 if (httpRequest.status = 200) { 
//                     var ul = document.createElement('ul')
//                     result.appendChild(ul)
//                     for (var i = 0; i < results.length; i++) {
//                         var li = document.createElement('li')
//                         li.innerHTML = results[i].name
//                         ul.appendChild(li)
//                     }
//                 }else {
//                     alert('impossible dae contacter le serveur !')
//                 }
//             }
//         }
//         httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
//         httpRequest.send()
        
//     })
    
// }
