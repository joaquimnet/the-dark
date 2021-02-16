import React from 'react';
import classnames from 'classnames';

import classes from './Button.module.css';

export const Button = ({
  children,
  className,
  as,
  block,
  animated,
  weak,
  ...otherProps
}) => {
  const css = classnames(classes.Button, className, {
    [classes.Block]: block,
    [classes.Animated]: animated,
    [classes.Light]: weak,
  });

  const Component = as || 'button';

  if (Component === 'input') {
    return <Component className={css} value={children} {...otherProps} />;
  }

  return (
    <Component className={css} {...otherProps}>
      {children}
      <div className={classnames(classes.BG, { [classes.Light]: weak })} />
    </Component>
  );
};
