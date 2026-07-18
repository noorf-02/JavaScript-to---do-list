let writeTask = document.querySelector('.write-task');
let submitTask = document.querySelector('.submit-task');

// to get value from an input field, we target it's value. \

function getTask(){
    
    if(inputVal===''){
        alert('Please Enter Task');
    }
    else{
        let inputVal = writeTask.value;
    console.log(inputVal);
    }
}

