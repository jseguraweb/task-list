const list = document.querySelector('#list');

// clear all tasks

const clearAll = document.querySelector('#clear-button');
clearAll.addEventListener('click', () => {
    const clearAllList = confirm('Are you sure you want to clear the whole list?');
    if (clearAllList) {
        while (list.firstChild) {
            list.firstChild.remove();
        }
    };
});


// add new item

const newTask = document.querySelector('#new-task');

const addNewTask = document.querySelector('#add-button');
addNewTask.addEventListener('click', (e) => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = newTask.value;
    const newLink = document.createElement('a');
    newLink.setAttribute('href', '#');
    newLink.innerHTML = '<i class="fas fa-trash-alt"></i>';
    newItem.appendChild(newLink)
    list.appendChild(newItem);

    e.preventDefault();
    newTask.value = '';
})