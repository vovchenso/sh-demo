import React from 'react';
import ModuleX from 'solutions-hamburg-modulex';
import ModuleY from 'solutions-hamburg-moduley';

import './App.less';

const App = () => (
  <div className="app">
    <div className="app__module-wrapper">
      <ModuleX />
    </div>
    <div className="app__module-wrapper">
      <ModuleY />
    </div>
  </div>
);

export default App;
