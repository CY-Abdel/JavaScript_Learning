var button = document.querySelector('.spoiler button')

button.addEventListener('click', function(){
	this.nextElementSibling.classList.add('visible')
	this.parentNode.removeChild(this)
})