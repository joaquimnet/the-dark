import React from 'react';
import classnames from 'classnames';

import classes from './Flex.module.css';

export const Flex = ({
  children,
  alignCenter,
  alignStart,
  alignEnd,
  justifyCenter,
  justifyStart,
  justifyEnd,
  row,
  column,
  fluid,
  className,
  as,
  ...otherProps
}) => {
  const css = classnames(classes.Container, className, {
    [classes.AlignCenter]: !!alignCenter,
    [classes.AlignStart]: !!alignStart,
    [classes.AlignEnd]: !!alignEnd,
    [classes.JustifyCenter]: !!justifyCenter,
    [classes.JustifyStart]: !!justifyStart,
    [classes.JustifyEnd]: !!justifyEnd,
    [classes.Row]: !!row,
    [classes.Column]: !!column,
    [classes.Fluid]: !!fluid,
  });

  const Component = as || 'div';

  return (
    <Component className={css} {...otherProps}>
      {children}
    </Component>
  );
};
