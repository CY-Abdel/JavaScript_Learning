// var button = document.querySelector('.spoiler button')

// button.addEventListener('click', function () {
//     this.nextElementSibling.classList.add('visible')
//     this.parentNode.removeChild(this)
// })

var elements = document.querySelectorAll('.spoiler')

var createButton = function (element) {
    //creer span
    var span = document.createElement('span')
    span.className = "spoiler-content"
    span.innerHTML = element.innerHTML
    
    //créer button
    var button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'
    
    //on ajoute les élements au DOM
    element.innerHTML = ''
    element.appendChild(button)
    element.appendChild(span)

    //on ajoute lecouteur
    button.addEventListener('click', function () {
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    })
}

for (var i = 0; i < elements.length; i++) {
     createButton(elements[i])
}