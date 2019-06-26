// Define UI variables that we gonna need
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// function to load all event listieners
loadEventListeners();

//load all event listieners
function loadEventListeners() {
  //add task form
  form.addEventListener('submit' , addTask);
}

//add task funtion from  the form above
function addTask(e) { // e stands for event object ( event handler )
// we need to make sure there is a value in our box so we put if() statement
  if(taskInput.value === ''){
    alert('Add a task';) //if there is nothing inputed to our task box we display message(alert) add a task

  }

e.preventDefault(); //prevent default behaviour of the function from happening
}