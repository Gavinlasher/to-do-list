import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  createTask(newTask) {
    const realTask = new Task(newTask);

    ProxyState.tasks = [realTask, ...ProxyState.tasks];

    console.log(newTask, "this is now made it to the taskservice");
  }
deleteTask(id){


 ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
}

completeTask(thisid){
console.log('task new id',thisid);
let newTask = ProxyState.tasks.find(t => t.id == thisid)
if(newTask.complete == false ){
  newTask.complete = true;
}

console.log(newTask);


ProxyState.tasks = ProxyState.tasks




  


}


}





export const tasksService = new TasksService();
