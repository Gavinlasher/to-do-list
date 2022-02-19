import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({ name, listid, id,check }) {
    this.name = name;
    this.listid = listid;
    // is it complete? cheack that needs to reurn true or false 
 this.check = 
    this.id = generateId() || id;
  }
// checked turnary for a checked box below
  get taskTemplate() {
    return /*html*/ `
    <div class="form-check bg-secondary text-center">
    <input class="form-check-input" type="checkbox" value="" ${ ? 'checked': ''} id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
      ${this.name}
    </label>
    <i class="mdi mdi-delete" onclick="app.tasksController.deleteTask(${this.id})"></i>
  </div>


`;
  }
}
