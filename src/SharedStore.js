import { observable, action, computed } from 'mobx';
import * as Immutable from 'immutable';
import parameters from './data/parameters';
import choices from './data/choices';

class SharedStore {
  @observable myParams = Immutable.Set();
  @observable choices = choices;
  @observable parameters = parameters;
   
  @action toggle = (key) => {
    this.myParams = this.myParams.includes(key) ? this.myParams.remove(key) : this.myParams.add(key);
  }
  
  @computed get filteredChoices () {
    return this.choices.filter((item) => {
      if (this.myParams.size === 0) {
        return true;
      }
      return item.get('parameters').toSet().intersect(this.myParams).size === this.myParams.size;
    })
  }
}

const store = new SharedStore();
export default store;
