const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list_container');
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
}