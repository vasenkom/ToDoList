const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list_container');

//fuction which adds the tasks
function addTask() {
    if (inputBox.value === ''){
        alert('Please add the task');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//function to make the task checked and to delete the task
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//function which will save tasks if the page will be updated
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

//function which will show saved by saveData() tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();