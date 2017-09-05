import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'solutions-hamburg-common';
import { EventManager } from 'solutions-hamburg-core';

import './ModuleX.less';

class ModuleX extends Component {

  componentDidMount() {
    EventManager.addEventListener(EventManager.Events.Y_FIRES_BULLET, this.onBulletReceive);
  }

  componentWillUnmount() {
    EventManager.removeEventListener(EventManager.Events.Y_FIRES_BULLET, this.onBulletReceive);
  }

  onBulletReceive = ({ target }) => {
    this.props.receiveBullets(target);
  };

  onButtonClick = () => {
    this.props.fireBullets(2);
  };

  render() {
    const { collectedBullets, firedBullets } = this.props;

    return (
      <div className="module-x">
        <Box title="Module X" className="module-x__box">
          <div className="module-x__label">
            <span>Bullets Received:</span>
            <span className="module-x__value">{collectedBullets}</span>
          </div>
          <div className="module-x__label">
            <span>Bullets Fired:</span>
            <span className="module-x__value">{firedBullets}</span>
          </div>
          <div className="module-x__submit">
            <Button className="module-x__submit-button" onClick={this.onButtonClick}>
              Fire 2 bullets to Y
            </Button>
          </div>
        </Box>
      </div>
    );
  }
}

ModuleX.propTypes = {
  fireBullets: PropTypes.func,
  receiveBullets: PropTypes.func,
  collectedBullets: PropTypes.number,
  firedBullets: PropTypes.number
};

export default ModuleX;
