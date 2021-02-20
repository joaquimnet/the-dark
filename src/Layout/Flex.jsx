import React from 'react';
import classnames from 'classnames';

import classes from './Flex.module.css';

export const Flex = ({
  children,
  align = 'flex-start',
  justify = 'flex-start',
  direction,
  fluid,
  className,
  style: externalStyles = {},
  as: Component = 'div',
  ...otherProps
}) => {
  const css = classnames(classes.Container, classes.Fluid, className, {
    [classes.Row]: direction === 'row',
    [classes.Column]: direction === 'column',
  });

  const style = {
    justifyContent: justify,
    alignItems: align,
    ...externalStyles,
  };

  return (
    <Component className={css} style={style} {...otherProps}>
      {children}
    </Component>
  );
};
