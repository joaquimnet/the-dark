import React from 'react';
import styles from './styles.module.css';

export * from './Layout/Flex';
export * from './Button/Button';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};
