import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
    bodyAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    htmlAttributes: PropTypes.object,
    postBodyComponents: PropTypes.array,
    preBodyComponents: PropTypes.array,
  };

  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${
              process.env.GOOGLE_PLACES_API_KEY
            }&libraries=places`}
            type="text/javascript"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id="___gatsby"
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
