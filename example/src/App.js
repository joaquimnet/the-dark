import React from 'react';

import { Flex, Button, Paper, Typography } from 'the-dark';

import 'the-dark/dist/index.css';

const App = () => {
  return (
    <Flex justify='center' align='center'>
      <Paper>
        <Typography>Welcome to the Shadow Realm, child.</Typography>
        <Flex justify='space-evenly' direction='row' style={{ width: '100%' }}>
          <Button animated>Embrace The Dark</Button>
          <Button weak animated>
            Forsaken The Light
          </Button>
        </Flex>
      </Paper>
    </Flex>
  );
};

export default App;
