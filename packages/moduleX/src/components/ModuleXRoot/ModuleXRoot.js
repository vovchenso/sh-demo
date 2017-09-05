import React from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import ModuleX from '../ModuleX';

const ModuleXRoot = props => (
  <Provider store={store}>
    <ModuleX {...props} />
  </Provider>
);

export default ModuleXRoot;
