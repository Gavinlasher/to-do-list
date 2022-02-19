import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { listsServices } from "../Services/ListsService.js";

function _drawList() {
  let temp = "";
  let lists = ProxyState.lists;
  lists.forEach((l) => (temp += l.Template));

  document.getElementById("lists").innerHTML = temp;
}

export class ListsController {
  constructor() {
    ProxyState.on("lists", _drawList);

    console.log("hello from list controller");
    _drawList();
  }

  createList() {
    window.event.preventDefault();

    const form = window.event.target;

    const newList = {
      name: form.name.value,
      color: form.color.value,
    };
    console.log(newList);

    listsServices.createList(newList);
  }

  deleteList(listId) {
    listsServices.deleteList(listId);
  }
}
