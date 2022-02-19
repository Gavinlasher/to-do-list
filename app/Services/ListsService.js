import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsServices {
  hello() {
    console.log("hello we are in the list service now");
  }

  createList(newList) {
    console.log(newList, "this is now the new list");
    const list = new List(newList);
    ProxyState.lists = [...ProxyState.lists, list];
  }

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter((l) => l.id != id);
ProxyState.tasks = ProxyState.tasks.filter(t => t.listid != id )
  }
}

export const listsServices = new ListsServices();
