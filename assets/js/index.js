const Btn = document.getElementById("createTask")
        const Delete = document.getElementById("deleteTask")
        const Save = document.getElementById("saveTask")
        const Card = document.querySelector(".taskCard")
        const ToDo = document.getElementById("task")
        const titleTask = document.querySelector("#title")
        const doNow = document.querySelector(".todoCard")

        // To set some elements on display when the 'Add Task' button is clicked
        const displayBlock = () => {
            titleTask.style.display = "block"
            ToDo.style.display = "block";
            Save.style.display = "block";
            Delete.style.display = "block"; 
        }
        Btn.addEventListener('click', displayBlock);

        const displayNone = () => {
            titleTask.style.display = "none"
            ToDo.style.display = "none";
            Save.style.display = "none";
            // Delete.style.display = "none"; 
        }

        // To dynamicall create the HTML elements that will take the value of input and textarea
        const myToDo = () => {
            const Title = titleTask.value;
            const Task = ToDo.value;
            const div = document.createElement("div");
            div.innerHTML = `<h3 id="taskTitle">${Title}</h3>
            <p id="taskDetail">${Task}</p>`
            div.classList.add("todoCard")
            Card.appendChild(div);
        }
        myToDo();

        // function Action(){
        //     if(Save){

        //     }
        // }

        Save.addEventListener('click', () => {
            displayNone();
            myToDo();
        })

        // Delete.addEventListener('click', () => {
        //     doNow.style.display = "none";
        //     Delete.style.display = "none"; 
        // })