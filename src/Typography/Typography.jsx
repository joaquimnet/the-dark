import React from 'react';
import classnames from 'classnames';

import classes from './Typography.module.css';

export const Typography = ({
  children,
  as: Component = 'p',
  align = 'left',
  className,
  style: externalStyles,
  ...otherProps
}) => {
  const css = classnames(classes.Typography, className);

  const style = {
    textAlign: align,
    ...externalStyles,
  };

  return (
    <Component className={css} style={style} {...otherProps}>
      {children}
    </Component>
  );
};
