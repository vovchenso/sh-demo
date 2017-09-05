import { fromJS } from 'immutable';

import * as moduleYActions from '../actionTypes/moduleY';

export const initialState = fromJS({
  collectedBullets: 0,
  firedBullets: 0
});

export default (state = initialState, action) => {
  switch (action.type) {
    case moduleYActions.FIRE_BULLETS:
      return state.set('firedBullets', state.get('firedBullets') + action.numOfBullets);
    case moduleYActions.RECEIVE_BULLETS:
      return state.set('collectedBullets', state.get('collectedBullets') + action.numOfBullets);
    default:
      return state;
  }
};
