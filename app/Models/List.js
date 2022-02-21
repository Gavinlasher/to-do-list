import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(data) {
    this.name = data.name;
    this.color = data.color;
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/ `
        
        
      <div class="col-md-3 mt-3">
        <div style="background-color: ${this.color};" class="text-center rounded-top border border-dark">
          <div class="d-flex justify-content-between m-3">
            <h3>${this.name}</h3><i class="mdi mdi-delete" onclick="app.listsController.deleteList('${this.id}')"></i>
          </div>
          <p>${this.Complete}/${this.TotalList}</p>
        </div>
        <div class="border border-dark">
         ${this.taskTemplate}
        </div>
        <form class="" onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="input-group">
            <input  required type="text" class="form-control" placeholder="Task..." aria-label="task" aria-describedby="task" maxlength="50" minlength="3" id="name">
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
            <i class="mdi mdi-plus"></i></button>
          </div>
        </form>
      </div>
    
        
        
        `;
  }
  get taskTemplate() {
    let temp = "";
    let myTask = ProxyState.tasks.filter((t) => t.listid == this.id);

    myTask.forEach((t) => (temp += t.Template));
    return temp;
  }

  get Complete() {
    let output = 0;

    // ProxyState.tasks = ProxyState.tasks.filter((t) => (t.listid = this.id));

    const completeTask = ProxyState.tasks.filter(
      (t) => t.complete && t.listid == this.id
    );

    output += completeTask.length;

    return output;
  }

  get TotalList() {
    let output = 0;

    const newTask = ProxyState.tasks.filter((t) => t.listid == this.id);

    output += newTask.length;

    return output;
  }
}
