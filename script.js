let writeTask = document.querySelector('.write-task'); 
let submitTask = document.querySelector('.submit-task');
let taskField = document.querySelector('.task-field'); 
let taskDone = document.querySelector('.task-done');
let taskContainer = document.querySelector('.task-container');
// to get values from the input we target the value but to get values from p we get innerText

let arr = [];

function getInput(){
    if(writeTask.value ===""){
        alert("Field can't be empty");
    }else{
        let input = writeTask.value;

    arr.push(input);
    console.log(input);
    // console.log(arr);
    writeTask.value = "";

    taskContainer.classList.remove('invisible');
    // taskField.innerText = input;

    for( let i = 0; i < arr.length ; i++ ){
        let newTaskField = document.createElement('p');


    }


    }
    
} 

function removeTask(){
    taskField.innerText = "";
    taskContainer.classList.add('invisible');
    alert("Task Removed");
}