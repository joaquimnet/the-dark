import React from 'react';
import classnames from 'classnames';

import classes from './Typography.module.css';

export const Typography = ({
  children,
  as: Component = 'p',
  className,
  ...otherProps
}) => {
  const css = classnames(classes.Typography, className);

  return (
    <Component className={css} {...otherProps}>
      {children}
    </Component>
  );
};
