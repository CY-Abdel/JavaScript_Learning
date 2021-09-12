


window.addEventListener('scroll', _.debounce(function () {
    console.log('sans throttle')
}, 200))


window.addEventListener('scroll', function () {
    console.log('avec throtle')
})

