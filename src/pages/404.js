import React from 'react';

import './404.css';

const NotFoundPage = () => (
  <div
    style={{
      alignItems: 'center',
      background: '#fff',
      color: '#000',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: `-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
      'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', 'sans-serif'`,
      height: '100vh',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <div>
      <h1
        style={{
          borderRight: '1px solid rgba(0, 0, 0, 0.3)',
          display: 'inline-block',
          fontSize: '24px',
          fontWeight: 500,
          margin: 0,
          marginRight: 20,
          padding: '10px 23px 10px 0',
          verticalAlign: 'top',
        }}
      >
        404
      </h1>
      <div
        style={{
          display: 'inline-block',
          fontSize: 14,
          fontWeight: 'normal',
          height: 49,
          lineHeight: 49,
          lineHeight: 'inherit',
          margin: 0,
          padding: '16px 0',
          textAlign: 'left',
        }}
      >
        This page could not be found.
      </div>
    </div>
  </div>
);

export default NotFoundPage;
