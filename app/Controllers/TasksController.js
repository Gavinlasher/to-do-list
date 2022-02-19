import { tasksService } from "../Services/TasksService.js";

export class TasksController {
  constructor() {
    console.log("hello form task controller");
  }
  createTask(listid) {
    window.event.preventDefault();
    let form = window.event.target;
    let newTask = {
      listid,
      name: form.name.value,
    };
    tasksService.createTask(newTask);
  }
}
