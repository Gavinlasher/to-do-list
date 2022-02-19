import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  createTask(newTask) {
    const realTask = new Task(newTask);

    ProxyState.tasks = [realTask, ...ProxyState.tasks];

    console.log(newTask, "this is now made it to the taskservice");
  }
}

export const tasksService = new TasksService();
