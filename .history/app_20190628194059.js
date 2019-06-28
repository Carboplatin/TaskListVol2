// Define UI variables that we gonna need
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// function to load all event listieners
loadEventListeners();

//load all event listieners
function loadEventListeners() {
  //DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded' , getTasks);  // event that kicks off right after page is loaded- get saved Tasks
  //add task form
  form.addEventListener('submit' , addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click' , clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//Get task from local storage
function getTasks() {
  let tasks;  //initialize task
  if(localStorage.getItem('tasks') === null) {   //check if there is anything in there
    tasks = []; // add to empty array if there isnt something there
  } else {  // if there IS something there
    tasks = JSON.parse(localStorage.getItem('tasks'));  //if there is something there, set it to whatever is there
  }

  //we want to loop through those tasks that are there, using forEach LOOP
  tasks.forEach(function(task) {
    //Create li element (copied from line 63)
    const li = document.createElement('li');

    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class= "fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);
  });
}

//add task funtion from  the form above
function addTask(e) { // e stands for event object ( event handler )
                        // we need to make sure there is a value in our box so we put if() statement
  if(taskInput.value === ''){
    alert('Add a task'); //if there is nothing inputed to our task box we display message(alert) add a task
  }

  // create li element where we put our tasks
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item'; // to make it look good we add class name for collection item for each element
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class= "fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);

  //store in LOCAL STORAGE - js got itself local storage
  storeTaskInLocalStorage(taskInput.value);  //passed taskInput.value from line 35

  //clear the input
  taskInput.value ='';

e.preventDefault(); //prevent default behaviour of the function from happening
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));  //local storage can only store strings so we 'change'-PARSE as string
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(task));  //must be stored as string hence json
}


//remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item'))
  {
    if(confirm('Are you Sure mate?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//clear task
function clearTasks() {

  //slow version

  //taskList.innerHTML = '';

  //FASTER VERSION

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//filter task
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
  function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';

    }
  });
}