import { fromJS } from 'immutable';

import * as moduleXActions from '../actionTypes/moduleX';

export const initialState = fromJS({
  collectedBullets: 0,
  firedBullets: 0
});

export default (state = initialState, action) => {
  switch (action.type) {
    case moduleXActions.FIRE_BULLETS:
      return state.set('firedBullets', state.get('firedBullets') + action.numOfBullets);
    case moduleXActions.RECEIVE_BULLETS:
      return state.set('collectedBullets', state.get('collectedBullets') + action.numOfBullets);
    default:
      return state;
  }
};
