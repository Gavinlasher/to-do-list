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
        <div style="background:'${this.color}'" class="bg-primary text-center rounded-top border border-dark">
          <div class="d-flex justify-content-between m-3">
            <h3>${this.name}</h3><i class="mdi mdi-delete" onclick="app.listsController.deleteList('${this.id}')"></i>
          </div>
          <p>3/4</p>
        </div>
        <div class="border border-dark">
          <div class="form-check bg-secondary text-center">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
              Task 1
            </label>
          </div>
          <div class="form-check bg-secondary text-center">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
              Task 2
            </label>
          </div>
        </div>
        <form class="" onsubmit="app.taskController.createTask()">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Task" aria-label="task" aria-describedby="task"
              id="task">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
                class="mdi mdi-plus"></i></button>
          </div>
        </form>
      </div>
    </div>
        
        
        `;
  }
}
