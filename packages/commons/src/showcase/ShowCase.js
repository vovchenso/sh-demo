import React from 'react';
import { Box, Button } from '../';

import './ShowCase.less';

const ShowCase = () => (
  <div className="showcase">
    <h1 className="showcase__title">Component Showcase</h1>
    <div className="showcase__case">
      <h2 className="showcase__case-label">Box Component</h2>
      <Box title="Box Title">
        Box content
      </Box>
    </div>
    <div className="showcase__case">
      <h2 className="showcase__case-label">Button Component</h2>
      <Button>Click me!</Button>
    </div>
  </div>
);

export default ShowCase;
