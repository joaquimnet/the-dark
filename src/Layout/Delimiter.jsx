import React from 'react';
import classnames from 'classnames';

import classes from './Delimiter.module.css';

export const Delimiter = ({ className, ...otherProps }) => {
  const css = classnames(classes.Delimiter, className);

  return <hr className={css} {...otherProps} />;
};
