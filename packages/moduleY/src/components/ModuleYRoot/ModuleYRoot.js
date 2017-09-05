import React from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import ModuleY from '../ModuleY';

const ModuleYRoot = props => (
  <Provider store={store}>
    <ModuleY {...props} />
  </Provider>
);

export default ModuleYRoot;
