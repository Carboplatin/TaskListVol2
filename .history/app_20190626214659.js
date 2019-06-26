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
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click' , clearTask);
  //filter tasks event
  filter.addEventListener('keyup', filterTask);
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
  li.className = 'collection-item' // to make it look good we add class name for collection item for each element
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

  //clear the input
  taskInput.value ='';

e.preventDefault(); //prevent default behaviour of the function from happening
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
function clearTask() {
  //taskList.innerHTML = '';

  //FASTER VERSION

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//filter task
function filterTask(e) {
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