const inputTask = document.getElementById('inputTask');
const addTask = document.getElementById('addTask');
const list = document.getElementById('list');

addTask.addEventListener('click', function () {
    //document.body.append(list);

    const taskItem = document.createElement('li');
    taskItem.textContent = inputTask.value;

    

    taskItem.addEventListener('click', function() {
    taskItem.classList.toggle('completed'); 
    });

    list.append(taskItem);
    inputTask.value = '';

});












