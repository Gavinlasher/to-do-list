import { generateId } from "../Utils/generateId.js";

export class Task {
constructor(data) {
    this.name = data.name;
    this.id = data.id || generateId()
    this.complete = data.complete
    this.listid = data.listid;
  }
  

  get Template() {
// checked ternary  for a checked box below    ${ ? 'checked': ''} create an onclick that will push a bol and check it with ternary 
    return /*html*/ `
    <div class="form-check bg-secondary text-center d-flex justify-content-between">
    ${this.name}
    <input class="form-check-input" type="checkbox" ${this.complete ? 'checked' : ''} onclick="app.tasksController.completeTask('${this.id}')"  value="" >
    <i class="mdi mdi-delete" onclick="app.tasksController.deleteTask('${this.id}')"></i>
  </div>


`;
  }
}
