import { createBrowserHistory } from 'history';

export const History = createBrowserHistory({
  basename: process.env.ASSET_PATH
});
