import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

export class TasksController {
  constructor() {
    console.log("hello form task controller");
  }
  createTask(listid) {
    window.event.preventDefault();
    let form = window.event.target



    let newTask = {
      complete: false,
      listid,
      name: form.name.value
    };
console.log(newTask, 'this is working?');
    tasksService.createTask(newTask);
  }
 async deleteTask(id){
   if(await Pop.confirm()){
     tasksService.deleteTask(id)
   }


  }

 completeTask(thisid){
   Pop.gavin()
  console.log(thisid, 'hello this id is from complete task');
tasksService.completeTask(thisid)
}


}
