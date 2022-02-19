import { ProxyState } from "../AppState";
import { Task } from "../Models/Task";

class TasksService {
  createTask(newTask) {
    const realTask = new Task(newTask);

    ProxyState.tasks = [realTask, ...ProxyState.tasks];

    console.log(newTask, "this is now made it to the taskservice");
  }
}

export const tasksService = new TasksService();
