import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import 'assets/styles/main.css';

import { AppProviders } from './providers/AppProviders';
import { App } from './app/App';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });
}

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
