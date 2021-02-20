import React from 'react';

import { Flex, Button, Paper, Typography, Delimiter } from 'the-dark';

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
        <Delimiter />
        <Typography align='center'>
          🛠{' '}
          <a
            href='https://github.com/joaquimnet/the-dark'
            target='_blank'
            rel='noreferrer'
          >
            The Dark
          </a>
        </Typography>
      </Paper>
    </Flex>
  );
};

export default App;
