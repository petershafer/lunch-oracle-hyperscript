import * as Immutable from 'immutable';

const choice = (key, label, parameters) => Immutable.fromJS({key, label, parameters})

export default Immutable.fromJS([
  choice('starbucks', 'Starbucks', ['indoors', 'outdoors', 'coffee']),
  choice('subway', 'Subway', ['indoors']),
  choice('mcdonalds', 'McDonalds', ['indoors', 'coffee']),
]);