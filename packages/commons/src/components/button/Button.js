import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.less';

const Button = (props) => (
  <button {...props} className={classNames('button', props.className)} />
);

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
