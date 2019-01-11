// automatically import all files ending in *.stories.tsx
import { configure, addDecorator } from '@storybook/react';
// @ts-ignore
import { withNotes } from '@storybook/addon-notes';
const req = require.context('../src', true, /.stories.tsx$/);
addDecorator(withNotes);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
