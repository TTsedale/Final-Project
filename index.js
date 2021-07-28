//const taskManager = require('./taskManager.js')
// const TaskManager = taskManager.TaskManager

//import TaskManager from './taskManager.js'


const createTaskHTML= (name, detailedDescription, assignedTo, dueDate, status) => {
    const html = `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 ">
                    <h4 class="card-title" id = "taskListCard">Task List1</h4>
                        <div class="card mb-4"> 
                            <div class="card-body cardone">
                                <ul class="list-group  list-group-flush ">
                                    <li class="list-group-item cardA">Name: ${name}</li>
                                    <li class="list-group-item cardA">Discription:${detailedDescription}</li>
                                    <li class="list-group-item cardA">Assigned To: ${assignedTo}</li>
                                    <li class="list-group-item cardA">Date:${dueDate}</li>
                    
                                </ul>
                                <br>
                                <div>
                                <label for="toDo">Choose status:</label>
                                <select name="status" id="status">
                                    <option value="done">Done</option>
                                    <option value="Inprogress">In Progress</option>
                                    <option value="delete">Delete</option>
                                </select>
                            </div>
      
                            </div>
                        </div>
                </div>
    `
    return html;
  };





  

class TaskManager {
    constructor (){
        this.tasks =[];
        this.currentId = 0;
    };

    
      addTask(name, detailedDescription, assignedTo, dueDate) {

        const newTask = {
            name:name, 
            detailedDescription:detailedDescription, 
            assignedTo:assignedTo, 
            dueDate:dueDate, 
            id: this.currentId
        };

        this.tasks.push(newTask);
        this.currentId++;
    }

    
    render() {
        const tasksHtmlList = [];

        for(let i=0; i<this.tasks.length; i++){
            let newTaskHTML = createTaskHTML(this.tasks[i].name, this.tasks[i].detailedDescription,this.tasks[i].assignedTo,this.tasks[i].dueDate,this.tasks[i].status);
            tasksHtmlList.push(newTaskHTML);
        }
      // console.log(this.tasks);
      const displayHere = document.getElementById('displayHere');
    displayHere.innerHTML = tasksHtmlList.join('\n + ');

    }

    date = new Date();

};      

// const taskListCard = document.getElementsById('taskListCard'); 
// taskListCard.addEventListener('submit', (e) => {
// taskListCard.innerHTML = newTaskHTML;

// });


//tasksHtmlList.join('\n + ');




// tasksHtmlList.addEventListener('DOMContentLoaded', () => {
//     document.getElementsById('submit').addEventListener('submit', tasksHtmlList);
// });







let tm = new TaskManager;
console.log(tm.tasks);



newTaskForm.addEventListener('submit',(event) => {
    // Prevent default action
    event.preventDefault();
    //Select the inputs
    
const newTaskForm = document.querySelector('#newTaskForm');
const taskName = document.querySelector('#name').value;
const detailedDescription = document.querySelector('#detailedDescription').value;
const taskAssignedTo = document.querySelector('#assignedTo').value;
const taskDueDate = document.querySelector('#date').value;
//const errorMessage = document.querySelector('#alertMessage');
    
    
    tm.addTask(taskName, detailedDescription, taskAssignedTo, taskDueDate);
    tm.render();
    document.getElementById('newTaskForm').reset();

    
    });

 




