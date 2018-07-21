import * as Immutable from 'immutable';

const parameter = (key, label) => Immutable.fromJS({key, label})

export default Immutable.fromJS([
  parameter('indoors', 'Indoors'),
  parameter('outdoors', 'Outdoor Seating'),
  parameter('drivethru', 'Drive Through'),
  parameter('coffee', 'Coffee'),
]);
