/*var demo = document.getElementById("demo")
if(demo.textContent) {
    demo.textContent = "salut"
}else {
    demo.innerText = "coucou"
}*/

// transintion de coulour sur un paragraphe
/*var p = document.querySelector('.paragraph')
window.setInterval( function(){
    p.classList.toggle('blue')
},1000)*/

//transtion sur tt les paragraphe
/*var ps = document.querySelectorAll('p')
for (var i = 0; i < ps.length; i++) {
    (function (p) {
        window.setInterval( function() {
            p.classList.toggle('blue')
        },1000)
    })(ps[i])   
}*/

/*var ul = document.querySelector('ul')
console.log(ul)

console.log(ul.children)
console.log(ul.childNodes)
console.log(ul.childElementCount)
console.log(ul.firstChild)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)*/

// ul.getElementsByTagName(li)
// ul.querySelector('li:nth-child(3)')

/*var li = ul.querySelector('li:nth-child(3)')
console.log(li)
console.log(li.previousElementSibling)
console.log(li.previousElementSibling.previousElementSibling)
console.log(li.nextElementSibling)
console.log(li.parentElement)
console.log(li.parentNode)
//pour recuper ts les li du meme niveau faut
// recuper le element parent
//puis tous les children de ce parent
console.log(li.parentElement.children)*/

/*//on selection le 1er li du document
var li = document.querySelector('li')
//suprimer le 1er li
li.parentElement.removeChild(li)

//ajouter un element dans le body
// on resumer cela diplace un element
document.body.appendChild(li)*/


/*
//on selection le 1er li du document
var li = document.querySelector('li')

//si on veut l'ajouter au parent
// il va etre ajouter a la fin de la liste
//li.parentElement.appendChild(li)
*/

/*
var li = document.querySelector('li')
//si on veut l'ajouter au parent
// il va etre ajouter a la fin de la liste
var li2 = li
li.parentElement.appendChild(li2)
*/

/*var li = document.querySelector('li')
// cela cree une copie qui nexiste null part
// on l'ajoute a notre li mais elle sera nulle
// sans text
var li2 = li.cloneNode()
// si on met true il va aussi cloner le text
var li3 = li.cloneNode(true)
li.parentElement.appendChild(li2)
li.parentElement.appendChild(li3)*/


/*var li = document.querySelector('li')
//pour creer un element
var li2 = document.createElement('li')
li2.textContent = "8"
li.parentElement.appendChild(li2)
li2.textContent = "1"
li.parentElement.replaceChild(li2, li)*/


/*var li = document.querySelector('li')
var last = document.querySelector('ul').lastElementChild 
li.parentElement.insertBefore(last, li)

*/