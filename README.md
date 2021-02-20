# The Dark

> A react component library straight from the shadow realm.

[![NPM](https://img.shields.io/npm/v/the-dark.svg)](https://www.npmjs.com/package/the-dark) [![The Dark](https://img.shields.io/badge/The-Dark-blue?labelColor=000000&color=555555)](https://github.com/joaquimnet/the-dark)

## Install

```bash
npm install the-dark
```

## Usage

```jsx
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
```

## License

MIT © [joaquimnet](https://github.com/joaquimnet)
