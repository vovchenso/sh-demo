import * as moduleXActions from '../actionTypes/moduleX';

export const fireBullets = (numOfBullets) => ({
  type: moduleXActions.FIRE_BULLETS,
  numOfBullets
});

export const receiveBullets = (numOfBullets) => ({
  type: moduleXActions.RECEIVE_BULLETS,
  numOfBullets
});
