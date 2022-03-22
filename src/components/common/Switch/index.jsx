import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Switch = (props) => {
  const { active, onClick, className } = props;

  return (
    <div
      role="presentation"
      onClick={() => onClick()}
      className={classNames('bf-switch', className, {
        'active': active,
      })}
    />
  );
};

Switch.defaultProps = {
  onClick: () => null,
};

Switch.propTypes = {
  active: PropTypes.any,
  onClick: PropTypes.any,
  className: PropTypes.any,
};

export default Switch;
