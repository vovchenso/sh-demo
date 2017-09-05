import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Box.less';

const Box = ({ title, children, className }) => (
  <div className={classNames('box', className)}>
    <h5 className="box__title">{title}</h5>
    <div>
      {children}
    </div>
  </div>
);

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Box;
