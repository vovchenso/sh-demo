import { connect } from 'react-redux';
import { EventManager } from 'solutions-hamburg-core';

import * as moduleXActions from '../../redux/actions/moduleX';
import ModuleX from './ModuleX';

const mapStateToProps = (state) => ({
  collectedBullets: state.moduleX.get('collectedBullets'),
  firedBullets: state.moduleX.get('firedBullets')
});

const mapDispatchToProps = (dispatch) => ({
  fireBullets: (numOfBullets) => {
    dispatch(moduleXActions.fireBullets(numOfBullets));
    EventManager.dispatch(EventManager.Events.X_FIRES_BULLET, numOfBullets);
  },
  receiveBullets: (numOfBullets) => dispatch(moduleXActions.receiveBullets(numOfBullets))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModuleX);
