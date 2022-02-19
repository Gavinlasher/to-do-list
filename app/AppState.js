import { List } from "./Models/List.js";
import { Task } from "./Models/Task.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { generateId } from "./Utils/generateId.js";
import { isValidProp } from "./Utils/isValidProp.js";

let hello = new List("mow", 4, generateId());


let gavin = new Task('hello')


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = [];

  lists = [];

  tasks = [gavin];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
