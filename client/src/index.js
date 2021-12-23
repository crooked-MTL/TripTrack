import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import TripProvider from './components/TripContext';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-wazrlof6.us.auth0.com' clientId='axFQUhZfEn6gk9DknjknRorGlgWIV9El' redirectUri={window.location.origin}>
      <TripProvider>
    <App />
    </TripProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);