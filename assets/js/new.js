
const LightMode = document.querySelector(".lightMode")
const DarkMode = document.querySelector(".darkMode")
const changeMode = document.querySelector(".nav")

var toggle = true;
const toggleMode = () => {
    
    if (toggle == true){
        DarkMode.style.display = "none";
        LightMode.style.display = "flex";
        toggle = false;
    }else{
        LightMode.style.display = "none";
        DarkMode.style.display = "flex";
        toggle = true;
    }
}
changeMode.addEventListener('click', toggleMode)

const NewTask = document.querySelector(".addBtn")
const AddTask = document.querySelector(".addTask")
const Modal = document.querySelector(".modal")
const SubmitTask = document. querySelector(".submitTask")
const titleTask = document.querySelector("#title")
const ToDo = document.getElementById("task")
const taskCardContainer = document.querySelector(".taskBox")
// const taskCard = document.querySelector(".Task1")

const displayModal = () => {
    Modal.style.display = "block"
    AddTask.style.display = "block";
}

const myToDo = () => {
    const Title = titleTask.value;
    const Task = ToDo.value;
    const div = document.createElement("div");
    div.innerHTML = `<h3 class="task-title">${Title}</h3>
    <p>${Task}</p>
    <div class="mark-del">
        <div class="mark">
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 0 16h2v2Zm-2-4v-2h2v2H0Zm0-4V8h2v2H0Zm0-4V4h2v2H0Zm0-4C0 1.45.196.979.588.587A1.922 1.922 0 0 1 2 0v2H0Zm4 12V4h10v10H4Zm0 4v-2h2v2H4ZM4 2V0h2v2H4Zm2 10h6V6H6v6Zm2 6v-2h2v2H8ZM8 2V0h2v2H8Zm4 16v-2h2v2h-2Zm0-16V0h2v2h-2Zm4 16v-2h2c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 16 18Zm0-4v-2h2v2h-2Zm0-4V8h2v2h-2Zm0-4V4h2v2h-2Zm0-4V0c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412h-2Z" fill="#FFDDD2"/></svg>

            <i class="fa-solid fa-square-check complete"></i>
            <p>Mark as complete</p>
        </div>


        <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 1 16V3H0V1h5V0h6v1h5v2h-1v13c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 13 18H3ZM13 3H3v13h10V3ZM5 14h2V5H5v9Zm4 0h2V5H9v9Z" fill="#FFDDD2"/></svg>
    </div>`
    div.classList.add("Task1")
    taskCardContainer.appendChild(div);
}
myToDo();
// const myToDo = () => {
//     const Title = titleTask.value;
//     const Task = ToDo.value;
//     const div = document.createElement("div");
//     div.innerHTML = `<h3 id="taskTitle">${Title}</h3>
//     <p id="taskDetail">${Task}</p>`
//     div.classList.add("todoCard")
//     taskCard.appendChild(div);
// }
// myToDo();

const closeModal = () => {
    Modal.style.display = "none"
    AddTask.style.display = "none";
    taskCardContainer.style.display = "flex"
}

NewTask.addEventListener('click', displayModal);
SubmitTask.addEventListener('click', () => {
    closeModal();
    myToDo();
});