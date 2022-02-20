import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

export class TasksController {
  constructor() {
    console.log("hello form task controller");
  }
  createTask(listid) {
    window.event.preventDefault();
    let form = window.event.target



    let newTask = {
      listid,
      name: form.name.value
    };
console.log(newTask, 'this is working?');
    tasksService.createTask(newTask);
  }
  deleteTask(id){
    
ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)

  }

completeTask(id){
  console.log(id, 'hello this id is from complete task');
tasksService.completeTask(id)
}


}
