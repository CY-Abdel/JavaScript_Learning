(function(){

	var	scrollY = function () {
		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

		return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	}

	var makeSticky = function (element) {
		/*
			lorsue l'on scrole
				si le menu sort de l'ecran
				Alors il devient fixe
			*/
			
			// -- Les variables
			// pas la peine de le creer car il est un param de la fonct
			/*
				var element = document.querySelector('.menu')
			*/
			// la position de l'element par rapport au haut de la fenetre 
			// et on ajoute la quantité de scrollY
			var top = element.getBoundingClientRect().top + scrollY()
			console.log(top)
			
			var rect = element.getBoundingClientRect() 
			
			// creer le offset et sa donne une chaine de caratctere il faut le parsint
			var offset = parseInt(element.getAttribute('data-offset') || 0, 10)
			console.log(offset)

			// il faut savoir a quel moment la la div du sidebar sort de la div bloc
			if(element.getAttribute('data-constraint')){
				var constraint = document.querySelector(element.getAttribute('data-constraint'))
			} else {
				var constraint = document.body
			}

			var constraintRect = constraint.getBoundingClientRect()
			var constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height  

			// pour que le texte ne disparait pas qu'on le menu devien fixe on cree un faux element
			var fake = document.createElement('div')
			fake.style.width = rect.width + "px"
			fake.style.height = rect.height + "px"
			
			// Les Fonctions
			var onScroll = function (){ 
				// var hasScrollClass = element.classList.contains('fixed')
				if (scrollY() > constraintBottom && element.style.position != 'absolute') {
					console.log('trop bas')
					//element.classList.remove('fixed')
					element.style.position = 'absolute'
					element.style.bottom = '0'
					element.style.top = 'auto'
				} else if (scrollY() > top-offset && scrollY() < constraintBottom && element.style.position != 'fixed') {
					// si on ajoute pas la condition hasScroll alors le code sera execute chasue fois on scroll
					// mais dans ce cas el code sera executer une seule fois
					element.classList.add('fixed')
					element.style.position = 'fixed'
					element.style.top = offset + "px"
					element.style.bottom = 'auto'
					// l'element perd sa largeur qu'on on scroll donc 
					// pr que la largeur redevienne normal
					// ne pa oublier l'unité
					element.style.width = rect.width + "px"
					// on ajoute l'element fake
					element.parentNode.insertBefore(fake, element)
				} else if (scrollY() < top - offset && element.style.position != 'static') {
					element.classList.remove('fixed')
					element.style.position = 'static'
					// on retire l'element fake
					if (element.parentNode.contains(fake)) {
                        element.parentNode.removeChild(fake)
                    }
				}
			}

			var onResize = function () {
				/* on remet la largeur auto */
				element.style.width = "auto"
				element.classList.remove('fixed')
				element.style.position = 'static'
				fake.style.display = "none"
				// on recalcule les positions
				rect = element.getBoundingClientRect()
				constraintRect = constraint.getBoundingClientRect()
				constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height  
 
				top = rect.top + scrollY()
				// on ajoute l'element fake qui correspond au nouvelles size
				fake.style.width = rect.width + "px"
				fake.style.height = rect.height + "px"
				fake.style.display = "block"
				// en fin on recalcule onScroll
				onScroll()
			}

			// Les Listener
			window.addEventListener('scroll', onScroll)
			/* lorsqu'on resize la page alors les valeur de width et autres sont changées donc faut redimensioné*/
			window.addEventListener('resize', onResize)
	}

	// on recuper tous les elemets qui vont avoir un attribut fixe
	var elements = document.querySelectorAll('[data-sticky]')

	for (var i = 0; i < elements.length; i++) {
		// on cree un function qui s'auto appelle
		makeSticky(elements[i])
	}
})()


// (function () {
//     var scrollY = function (){
//         var supportPageOffset = window.pageXOffset !== undefined;
//         var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

//         return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
//     }

//     var elements = document.querySelectorAll('[data-sticky]')

//     for (let i = 0; i < elements.length; i++) {
//         (function (element) {
//             /**
//              Lorsque on scroll
//                 si le menu sors de l'ecran
//                 Alors il deviendra fixe
//             */
            
//             // variables
//             var rect = element.getBoundingClientRect() 
//             var offset =parseInt(element.getAttribute('data-offset') || 0 ,10)
//             if (element.getAttribute('data-constraint')){
//                 var constraint = document.querySelector(element.getAttribute('data-constraint'))
//             }else {
//                 var constraint = document.body
//             }
//             var constraintRect = constraint.getBoundingClientRect()
//             var constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height  

//             var top = rect.top + scrollY()
//             var fake = document.createElement('div')
//             fake.style.width = rect.width + "px"
//             fake.style.height = rect.height + "px"

//             // Fonctions
//             var onScroll = function () {
//                 // var hasScrollClass = element.classList.contains('fixed')  
//                 if (scrollY() > constraintBottom && element.style.position != 'absolute'){
//                     element.style.position = 'absolute'
//                     element.style.bottom = '0'
//                     element.style.top = 'auto'
//                 }else if (scrollY() > top - offset && scrollY() < constraintBottom && element.style.position != 'fixed'){
//                     element.classList.add('fixed')
//                     element.style.position = 'fixed'
//                     element.style.top = offset + "px"
//                     element.style.bottom = 'auto'
//                     if (offset != 0){
//                         element.style.width = rect.width + "px"
//                     }else {
//                         element.style.width = rect.width + "px"
//                     }
                    
                    
//                     element.parentNode.insertBefore(fake, element)
//                 }else if (scrollY() < top - offset && element.style.position != 'static'){
//                     element.classList.remove('fixed')
//                     element.style.position = 'static'
//                     if (element.parentNode.contains(fake)) {
//                         element.parentNode.removeChild(fake)
//                     }
//                 }
//             }

//             var onResize = function () {
//                 element.style.width = "auto"
//                 element.classList.remove('fixed')
//                 element.style.position = 'static'
//                 fake.style.display = "none"
//                 rect = element.getBoundingClientRect()
//                 constraintRect = constraint.getBoundingClientRect()
//                 constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height  
//                 top = rect.top + scrollY()
//                 fake.style.width = rect.width + "px"
//                 fake.style.height = rect.height + "px"
//                 fake.style.display = "block"
//                 onScroll()
//             }

//             // Listener
//             window.addEventListener('scroll', onScroll)
//             window.addEventListener('resize', onResize)

//         })(elements[i])        
//     }
// })()
