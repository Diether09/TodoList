const myInput = document.getElementById(`myInput`);
const addTask = document.getElementById(`addtask`);
const newTask = document.getElementById(`newTask`);


function addNewTask() {
    if (myInput.value !== '') {
        const newList = document.createElement(`li`);
        newList.textContent = myInput.value;
        newTask.appendChild(newList);
       
        const removeBtn = document.createElement(`button`);
        removeBtn.innerText = "Remove";
        newTask.appendChild(removeBtn);

        const doneBtn = document.createElement(`button`);
        doneBtn.innerText = "Done";
        newTask.appendChild(doneBtn);

        function DoneTask() {
            doneList.appendChild(newList);
            doneList.appendChild(removeBtn);
            doneBtn.remove();
        }

        doneBtn.addEventListener(`click`, DoneTask);

        function removeNewTask() {
            newList.remove();
            removeBtn.remove();
            doneBtn.remove();
        }

        removeBtn.addEventListener(`click`, removeNewTask);

        
           
        myInput.value = '';
    } else {
        alert("You did not typed a new Task!");
    }
 
}



addTask.addEventListener(`click`, addNewTask);



