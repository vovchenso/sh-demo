import * as moduleYActions from '../actionTypes/moduleY';

export const fireBullets = (numOfBullets) => ({
  type: moduleYActions.FIRE_BULLETS,
  numOfBullets
});

export const receiveBullets = (numOfBullets) => ({
  type: moduleYActions.RECEIVE_BULLETS,
  numOfBullets
});
