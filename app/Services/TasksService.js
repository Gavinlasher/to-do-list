import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  createTask(newTask) {
    const realTask = new Task(newTask);

    ProxyState.tasks = [realTask, ...ProxyState.tasks];

    console.log(newTask, "this is now made it to the taskservice");
  }


completeTask(id){
const tasksArray = [...ProxyState.tasks]
let taskToUpdate =   tasksArray.find(t => t.id === id)
taskToUpdate.complete =  true;
ProxyState.tasks = taskToUpdate

}



}

export const tasksService = new TasksService();
