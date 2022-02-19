import { generateId } from "../Utils/generateId.js";

export class Task {
constructor(data) {
    this.name = data.name;
    this.id = generateId() || data.id
    this.clicked = data.clicked
    this.listid = data.listid;
  }
// checked ternary  for a checked box below    ${ ? 'checked': ''} create an onclick that will push a bol and check it with ternary 
  get Template() {
    return /*html*/ `
    <div class="form-check bg-secondary text-center d-flex justify-content-between">
    ${this.name}
    <input class="form-check-input" type="checkbox"  value="" id="name">
    <i class="mdi mdi-delete" onclick="app.tasksController.deleteTask('${this.id}')"></i>
  </div>


`;
  }
}
