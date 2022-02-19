import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({ name, listid, id }) {
    this.name = name;
    this.listid = listid;
    this.id = generateId() || id;
  }

  get taskTemplate() {
    return /*html*/ `
    <div class="form-check bg-secondary text-center">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
      ${this.name}
    </label>
    <i class="mdi mdi-delete" onclick="app.tasksController.deleteTask(${this.id})"></i>
  </div>


`;
  }
}
