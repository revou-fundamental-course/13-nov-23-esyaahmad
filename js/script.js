const submitButton = document.getElementsByClassName('primaryButton')
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const imageSlider = document.getElementById('slider')

submitButton[0].addEventListener("click", function(event){
    if (nameInput.value.length === 0 || emailInput.value.length === 0 ) {
        console.log("kosong")
        alert("Tidak boleh kosong")
    } else {
        console.log("aman")
    }
})
var i = 0
const images = [
    "assets/daniel-leone-v7daTKlZzaw-unsplash.jpg",
    "assets/luca-bravo-4yta6mU66dE-unsplash.jpg",
    "assets/pexels-simon-rizzi-1809644.jpg",
]
function bannerSlide() {
    i += 1
    if (i == images.length) {
        i = 0
    }
    imageSlider.src = images[i]
}

setInterval(bannerSlide, 5000)