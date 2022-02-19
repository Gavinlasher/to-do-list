import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor({ name, color, id }) {
    this.name = name;
    this.color = color;
    this.id = generateId() || id;
  }

  get Template() {
    return /*html*/ `
        
        <div class="row">
      <div class="col-md-3">
        <div style="background-color: ${this.color};" class="text-center rounded-top border border-dark">
          <div class="d-flex justify-content-between m-3">
            <h3>${this.name}</h3><i class="mdi mdi-delete" onclick="app.listsController.deleteList('${this.id}')"></i>
          </div>
          <p>3/4</p>
        </div>
        <div class="border border-dark">
         ${this.taskTemplate}
        </div>
        <form class="" onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="input-group">
            <input onclick="app.tasksController.deleteTask()" type="text" class="form-control" placeholder="Task" aria-label="task" aria-describedby="task"
              id="name">
        
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                class="mdi mdi-plus"></i></button>
          </div>
        </form>
      </div>
    </div>
        
        
        `;
  }
  get taskTemplate() {
    let temp = "";
    let myTask = ProxyState.tasks.filter((t) => t.listid == this.id);

    myTask.forEach((t) => (temp += t.Template));
    return temp;
  }
}
