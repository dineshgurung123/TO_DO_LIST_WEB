document.getElementById("addTaskButton").addEventListener('click', function(){



const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


if (taskInput.value.trim()!=='') {
      
  const taskItem  = document.createElement('li');

 taskItem.className = 'task';
 taskItem.textContent = taskInput.value;
 

 const deleteButton = document.createElement('button');

 deleteButton.textContent = 'Delete';


 deleteButton.addEventListener('click', function(){
  taskList.removeChild(taskItem); 
  
 });

 taskItem.appendChild(deleteButton) ; 
 taskList.appendChild(taskItem);
 
 taskInput.value = '';

}

});