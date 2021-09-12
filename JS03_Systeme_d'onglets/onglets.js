(function () {
    var afficherOnglet = function (a, animations) {
        if(animations === undefined){
            animations = true
        }
        var li = a.parentNode
        var div = a.parentNode.parentNode.parentNode
    
        if (li.classList.contains('active')){
            return false
        }
        
        // on retire la classe active de l'onglet active 
        div.querySelector('.tabs .active').classList.remove('active')
        // on ajoute la class actilve sur l'onglet actuel
        li.classList.add('active')
    
        // div.querySelector('.tab-content.active').classList.remove('active')
        // div.querySelector(a.getAttribute('href')).classList.add('active')

        var activeTab = div.querySelector('.tab-content.active')
        var aAffihcer = div.querySelector(a.getAttribute('href'))

        if (animations) { 
            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transitionend = function () {
                this.classList.remove('fade')
                this.classList.remove('active')
                aAffihcer.classList.add('active')
                aAffihcer.classList.add('fade')
                aAffihcer.offsetWidth
                aAffihcer.classList.add('in')
                activeTab.removeEventListener('transitionend', transitionend)
            }
            activeTab.addEventListener('transitionend', transitionend)
        }else{
            aAffihcer.classList.add('active')
            activeTab.classList.remove('asctive') 
        }    
    }
    
    var onglets = document.querySelectorAll('.tabs a')
    for (var i = 0; i < onglets.length; i++) {
        onglets[i].addEventListener('click', function (e) {
            afficherOnglet(this)
        }); 
    }
    
    var hashChange = function (e) {
        var hash = window.location.hash
        var a = document.querySelector('a[href="' + hash + '"]')
        if (a !== null && !a.parentNode.classList.contains('active')) {
            afficherOnglet(a, e !== undefined)
        }         
    }
 

    window.addEventListener('hashchange', hashChange)
    hashChange()
})()