let writeTask = document.querySelector('.write-task');
let submitTask = document.querySelector('.submit-task');
let taskContainer = document.querySelector('.task-container');
let taskField = document.querySelector('.task-field');
let taskDone = document.querySelector('.task-done');
let taskAppend = document.querySelector('.task-append')

// to get value from an input field, we target it's value. \

function getTask(){
    let inputVal = writeTask.value;

    if(inputVal===''){
        alert('Please Enter Task');
    }
    else{
    console.log(inputVal);
    writeTask.value = "";

    const taskWrapper = document.createElement('div');
    taskWrapper.style.cssText = `
    background-color: white;      
    border-radius: 9999px;       
    padding: 4px;                
    width: fit-content;           
    overflow-wrap: break-word;    
    word-break: break-all;       
    outline: none;   
    display:flex;    
    align-items: center;    
    `;
    

    const taskFieldWrapper = document.createElement('p');
    taskFieldWrapper.style.cssText = `
    background-color: #ffffff;  
    border-radius: 9999px;       
    padding: 2px 10px;         
    width: fit-content;          
    word-break: break-all;       
    overflow-wrap: break-word;  
    `;

    const icon = document.createElement('i');
    icon.className = 
    "fa-solid fa-check bg-green-600 text-white rounded-full text-[16px] p-2 hover:bg-green-700 cursor-pointer h-8 w-8"

    taskWrapper.appendChild(taskFieldWrapper);
    taskWrapper.appendChild(icon);
    taskAppend.appendChild(taskWrapper);

    taskFieldWrapper.innerText = inputVal;

    icon.addEventListener('click', ()=>{
        taskWrapper.remove();
        alert('Task Removed');
    })
    }
}



