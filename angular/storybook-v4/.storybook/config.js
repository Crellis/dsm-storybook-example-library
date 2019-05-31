import { configure, addDecorator } from '@storybook/angular';
import { initDsm } from '@invisionapp/dsm-storybook';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

//Init Dsm
initDsm({
  addDecorator,
  callback: () => {
    configure(loadStories, module);
  }
});
