import React from 'react';

import { ExampleComponent, Flex, Button } from 'the-dark';

import 'the-dark/dist/index.css';

const App = () => {
  return (
    <Flex justifyCenter alignCenter>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button animated>The Dark</Button>
    </Flex>
  );
};

export default App;
