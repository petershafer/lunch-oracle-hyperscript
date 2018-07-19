import { observable, action } from 'mobx';
import * as Immutable from 'immutable';

class SharedStore {
    @observable myMap = Immutable.Map();
    @observable myList = Immutable.List();

    @action doSomething = () => {
        this.myList = this.myList.push('hello');
    };
}

const store = new SharedStore();
export default store;
