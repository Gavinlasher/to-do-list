import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { listsServices } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";

function _drawList() {
  let temp = "";
  let lists = ProxyState.lists;
  lists.forEach((l) => (temp += l.Template));

  document.getElementById("lists").innerHTML = temp;
}

export class ListsController {
  constructor() {
    ProxyState.on("lists", _drawList);
    ProxyState.on('tasks', _drawList)
    ProxyState.on('lists',saveState)
    ProxyState.on('tasks',saveState)

    console.log("hello from list controller");
    loadState()
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

  async deleteList(listId) {
     if(await Pop.confirm()){
       listsServices.deleteList(listId);
     }
    
  }
}
