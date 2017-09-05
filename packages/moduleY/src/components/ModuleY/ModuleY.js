import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'solutions-hamburg-common';
import { EventManager } from 'solutions-hamburg-core';

import './ModuleY.less';

class ModuleY extends Component {
  componentDidMount() {
    EventManager.addEventListener(EventManager.Events.X_FIRES_BULLET, this.onBulletReceive);
  }

  componentWillUnmount() {
    EventManager.removeEventListener(EventManager.Events.X_FIRES_BULLET, this.onBulletReceive);
  }

  onBulletReceive = ({ target }) => {
    this.props.receiveBullets(target);
  };

  onButtonClick = () => {
    this.props.fireBullets(1);
  };

  render() {
    const { collectedBullets, firedBullets } = this.props;

    return (
      <div className="module-y">
        <Box title="Module Y">
          <div className="module-y__label">
            <span>Bullets Received:</span>
            <span className="module-y__value">{collectedBullets}</span>
          </div>
          <div className="module-y__label">
            <span>Bullets Fired:</span>
            <span className="module-y__value">{firedBullets}</span>
          </div>
          <div className="module-y__submit">
            <Button onClick={this.onButtonClick}>
              Fire 1 bullet to X
            </Button>
          </div>
        </Box>
      </div>
    );
  }
}

ModuleY.propTypes = {
  fireBullets: PropTypes.func,
  receiveBullets: PropTypes.func,
  collectedBullets: PropTypes.number,
  firedBullets: PropTypes.number
};

export default ModuleY;
