var allElem = document.querySelectorAll('.elem')
var fullElemPage = document.querySelectorAll('.fullElem')
var fullElemCloseBtn = document.querySelectorAll('.close')

allElem.forEach((curr) => {
    curr.addEventListener('click',() => {
        fullElemPage[curr.id].style.display = 'block'
    })
})

fullElemCloseBtn.forEach((back) => {
    back.addEventListener('click',() => {
        fullElemPage[back.id].style.display = 'none'
    })
})