

const NewTask = document.querySelector(".addBtn")
const AddTask = document.querySelector(".addTask")
const Modal = document.querySelector(".modal")
const SubmitTask = document. querySelector(".submitTask")
const titleTask = document.querySelector("#title")
const ToDo = document.getElementById("task")
const taskCardContainer = document.querySelector(".taskBox")
const Del = document.querySelector(".delBtn")
const Done = document.querySelector(".complete")
const Active = document.querySelector(".active")
const DoneDelete = document.querySelector(".doneDelete")

// const taskCard = document.querySelector(".Task1")


// TO DISPLAY MODAL AND INPUT FIELD
const displayModal = () => {
    Modal.style.display = "block"
    AddTask.style.display = "block";
}


// FUNCTION TO ADD NEW TASK 
const myToDo = () => {
    const Title = titleTask.value;
    const Task = ToDo.value;

    if (Title === '') {
        alert('Please input a task');
    } else {
        const li = document.createElement('li');
        li.innerHTML = `<div class="Task1">
            <h3 class="task-title">${Title}</h3>
            <p>${Task}</p>
            <div class="mark-del">
                <div class="mark">
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 18c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 0 16h2v2Zm-2-4v-2h2v2H0Zm0-4V8h2v2H0Zm0-4V4h2v2H0Zm0-4C0 1.45.196.979.588.587A1.922 1.922 0 0 1 2 0v2H0Zm4 12V4h10v10H4Zm0 4v-2h2v2H4ZM4 2V0h2v2H4Zm2 10h6V6H6v6Zm2 6v-2h2v2H8ZM8 2V0h2v2H8Zm4 16v-2h2v2h-2Zm0-16V0h2v2h-2Zm4 16v-2h2c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 16 18Zm0-4v-2h2v2h-2Zm0-4V8h2v2h-2Zm0-4V4h2v2h-2Zm0-4V0c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412h-2Z" fill="#FFDDD2"/>
                    </svg>
                    <i class="fa-solid fa-square-check complete"></i>
                    <p>Mark as complete</p>
                </div>
                <svg class="delBtn" onclick="deleteTask(this)" width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 1 16V3H0V1h5V0h6v1h5v2h-1v13c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 13 18H3ZM13 3H3v13h10V3ZM5 14h2V5H5v9Zm4 0h2V5H9v9Z" fill="#FFDDD2"/>
                </svg>
            </div>
        </div>`;

        taskCardContainer.appendChild(li);
    }
};


// TO CLOSE MODAL AND INPUT FIELD TO ADD TASK
const closeModal = () => {
    Modal.style.display = "none"
    AddTask.style.display = "none";
    taskCardContainer.style.display = "flex"
}


// CLICK EVENT TO ADD THE NEW TASK
NewTask.addEventListener('click', displayModal);
SubmitTask.addEventListener('click', () => {
    closeModal();
    myToDo();
});

// FUNCTION TO DELETE TASK
function deleteTask(button) {
    var taskItem = button.parentNode.parentNode; // Adjusted to access the grandparent node
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
}


const LightMode = document.querySelector(".lightMode")
const DarkMode = document.querySelector(".darkMode")
const changeMode = document.querySelector(".nav")

// TO TOGGLE LIGHT AND DARK MODE
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