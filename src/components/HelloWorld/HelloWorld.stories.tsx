import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { HelloWorld } from '../src';

const MD = {
    HelloWorld: {
        default:
`
# Hello World!
`,
    },
};

storiesOf('HelloWorld', module)
    .add(
        'default', () => (<HelloWorld />), { notes: { markdown: MD.HelloWorld.default } },
    );
