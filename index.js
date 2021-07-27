//const taskManager = require('./taskManager.js')
// const TaskManager = taskManager.TaskManager

//import TaskManager from './taskManager.js'

class TaskManager {
    constructor (){
        this.tasks =[];
        this.currentId = 0;
    };

    
      addTask(name, detailedDescription, assignedTo, dueDate) {

        const newTask = {
            name, 
            detailedDescription, 
            assignedTo, 
            dueDate, 
            id: this.currentId
        };

        this.tasks.push(newTask);
        this.currentId++;
    }

};      

let tm = new TaskManager;
console.log(tm.tasks);

const newTaskForm = document.querySelector('#newTaskForm');

//Select the inputs
const taskName = document.querySelector('#name');
const detailedDescription = document.querySelector('#detailedDescription');
const taskAssignedTo = document.querySelector('#assignedTo');
const taskDueDate = document.querySelector('#date');
//const errorMessage = document.querySelector('#alertMessage');

newTaskForm.addEventListener('Submit', (event) => {
    // Prevent default action
    event.preventDefault();
    
    tm.addTask(taskName, detailedDescription, taskAssignedTo, taskDueDate);

    document.getElementById('newTaskForm').reset();

    
    });
