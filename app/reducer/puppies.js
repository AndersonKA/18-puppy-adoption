import _ from 'lodash';

export default function puppies(state = [], action) {
  switch (action.type) {
    case 'PUPPY@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, 'id');
    case 'PUPPY@FINDONE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    case 'PUPPY@CREATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    case 'PUPPY@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    default:
      return state;
  }
}
