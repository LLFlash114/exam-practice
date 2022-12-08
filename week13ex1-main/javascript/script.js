document.body.addEventListener("click", doSomething)

function doSomething(e) {
    if (e.target.textContent == 'Change Background Color') {
        changeBGColor()
    }
}

// Change background color // 
function changeBGColor () {
    document.body.classList.toggle("new-BG-Color")
}