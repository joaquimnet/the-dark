import React from 'react';
import classnames from 'classnames';

import classes from './Paper.module.css';

export const Paper = ({
  children,
  className,
  as: Component = 'div',
  ...otherProps
}) => {
  return (
    <Component className={classnames(classes.Paper, className)} {...otherProps}>
      {children}
    </Component>
  );
};
