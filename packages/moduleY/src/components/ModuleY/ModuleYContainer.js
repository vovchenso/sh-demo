import { connect } from 'react-redux';
import { EventManager } from 'solutions-hamburg-core';

import * as moduleYActions from '../../redux/actions/moduleY';
import ModuleY from './ModuleY';

const mapStateToProps = (state) => ({
  collectedBullets: state.moduleY.get('collectedBullets'),
  firedBullets: state.moduleY.get('firedBullets')
});

const mapDispatchToProps = (dispatch) => ({
  fireBullets: (numOfBullets) => {
    dispatch(moduleYActions.fireBullets(numOfBullets));
    EventManager.dispatch(EventManager.Events.Y_FIRES_BULLET, numOfBullets);
  },
  receiveBullets: (numOfBullets) => dispatch(moduleYActions.receiveBullets(numOfBullets))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModuleY);
