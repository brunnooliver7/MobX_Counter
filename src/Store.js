import { action, makeObservable, observable } from "mobx";

class Store {
  counter = 0;

  constructor(value) {
    makeObservable(this, {
      counter: observable,
      increment: action,
      decrement: action
    });
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

export default new Store();