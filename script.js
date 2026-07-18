let writeTask = document.querySelector('.write-task');
let submitTask = document.querySelector('.submit-task');
let taskContainer = document.querySelector('.task-container');
let taskField = document.querySelector('.task-field');
let taskDone = document.querySelector('.task-done');

// to get value from an input field, we target it's value. \

function getTask(){
    let inputVal = writeTask.value;

    if(inputVal===''){
        alert('Please Enter Task');
    }
    else{
    console.log(inputVal);
    writeTask.value = "";
    taskContainer.classList.remove('invisible');
    }
}



