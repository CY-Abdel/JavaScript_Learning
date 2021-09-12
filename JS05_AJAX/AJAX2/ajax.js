var result = document.querySelector('#result')
var form = document.querySelector('#form')


form.addEventListener('submit', function (e) {
    e.preventDefault()  
    result.innerHTML = "Chargement..."  
    var httpRequest = new XMLHttpRequest()
    
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) { 
            result.innerHTML = ''
            if (httpRequest.status = 200) {
                result.innerHTML = httpRequest.responseText
            } else {
                alert('impossible dae contacter le serveur !')
            }
        }
    }
    httpRequest.open('POST', './ajax.php', true)
    var data = new FormData(form)
    // var input = document.querySelector('#q') 
    // data.append('q', input.value)
    httpRequest.send(data)
    
    // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    // var a = link.textContent
    // httpRequest.send("city=" + encodeURIComponent(a) + "&nom=Henry")
})


