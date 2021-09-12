// var httpRequest = new XMLHttpRequest()

var links = document.querySelectorAll('.meteo')
var result = document.getElementById('result')

for (var i = 0; i < links.length; i++) {
    var link = links[i]

    link.addEventListener('click', function (e) {
        e.preventDefault()  
        result.innerHTML = "Chargement..."  
        var httpRequest = new XMLHttpRequest()
        
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) { 
                result.innerHTML = ''
                if (httpRequest.status = 200) {
                    var results = JSON.parse(httpRequest.responseText)
                    var ul = document.createElement('ul')
                    result.appendChild(ul)
                    for (var i = 0; i < results.length; i++) {
                        var li = document.createElement('li')
                        li.innerHTML = results[i].name
                        ul.appendChild(li)
                    }
                }else {
                    alert('impossible dae contacter le serveur !')
                }
            }
        }
        httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
        httpRequest.send()
        
    })
    
}
