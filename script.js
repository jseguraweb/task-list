const list = document.querySelector('#list');
const newTask = document.querySelector('#new-task');


// add ONE new item

const addNewTask = document.querySelector('#add-button');
addNewTask.addEventListener('click', (e) => {
    if (newTask.value === '') {
        alert('Please, add a task')
    } else {
    const newItem = document.createElement('li');
    newItem.className = 'item';
    newItem.innerText = newTask.value;
    const newLink = document.createElement('a');
    newLink.setAttribute('href', '#');
    newLink.className = 'delete-item-icon';
    const trash = document.createElement('i');
    trash.className = 'fas fa-trash-alt';
    newLink.appendChild(trash);
    newItem.appendChild(newLink)
    list.appendChild(newItem);
    }
    newTask.value = '';
    e.preventDefault();
});


// clear ONE task

let trashIcon = document.querySelectorAll('.fa-trash-alt');

trashIcon.forEach(el => el.addEventListener('click', () => {
    el.parentElement.parentElement.remove();
}));

// clear ALL tasks

const clearAll = document.querySelector('#clear-button');
clearAll.addEventListener('click', () => {
    const clearAllList = confirm('Are you sure you want to clear the whole list?');
    if (clearAllList) {
        while (list.firstChild) {
            list.firstChild.remove();
        }
    };
});

