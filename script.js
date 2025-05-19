function openFeatures() {
    
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
}
openFeatures()

function toDoList() {

    // let currentTask = [
    //     {
    //         task: '',
    //         detail: '',
    //         imp: true
    //     },
    //     {
    //         task: '',
    //         detail: '',
    //         imp: false
    //     }
    // ]

    var currentTask = []

    if(localStorage.getItem('currentTask')){
        currentTask = JSON.parse(localStorage.getItem('currentTask'))
    }else{
        console.log("task is empty");
    }

    function renderTask() {
        var allTask = document.querySelector('.allTask')

        var sum = ''

        currentTask.forEach((elem, id) => {
            // console.log(elem.detail);
            sum += `<div class="task">
                        <h5>${elem.task}<span class=${elem.imp}>imp</span></h5>
                        <button id=${id}>Mark as completed</button>
                    </div>`
        })

        allTask.innerHTML = sum

        localStorage.setItem('currentTask', JSON.stringify(currentTask))

        var markCompletBtn = document.querySelectorAll('.task button')

        markCompletBtn.forEach((currElem) => {
            currElem.addEventListener('click', () => {
                currentTask.splice(currElem.id, 1)
                // console.log(currElem.id);
                renderTask()
            })
        })
    }

    renderTask()

    let form = document.querySelector('.addTask form')
    let taskInput = document.querySelector('.addTask form input')
    let taskDetailInput = document.querySelector('.addTask form textarea')
    let taskCheckBox = document.querySelector('.addTask form #check')


    form.addEventListener('submit',(e) => {
        e.preventDefault()

        currentTask.push(
            {
                task: taskInput.value,
                detail: taskDetailInput.value,
                imp: taskCheckBox.checked
            }
        )

        renderTask()

        taskInput.value = ''
        taskDetailInput.value = ''
        taskCheckBox.checked = false
    })

}

toDoList()

let dayPlanner = document.querySelector('.day-planner')

var hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)
var wholeDaySum = ''
hours.forEach((elem) => {
    wholeDaySum += `
        <div class="day-planner-time">
            <p>${elem}</p>
            <input type="text" placeholder="...">
        </div>
    `
})
dayPlanner.innerHTML = wholeDaySum
