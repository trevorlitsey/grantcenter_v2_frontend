import React, { PureComponent } from 'react';
import Level from 'react-bulma-components/lib/components/level';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';

const style = {
  textAlign: 'center',
};

const Item = ({ title, text }) => (
  <Level.Item style={style}>
    <div>
      <Heading renderAs="p" heading>
        {title}
      </Heading>
      <Heading renderAs="p">{text}</Heading>
    </div>
  </Level.Item>
);

class GrantHeader extends PureComponent {
  render() {
    return (
      <Box>
        <Level>
          <Item title="Due Date" text="Jan 1, 2019" />
          <Item title="Request Amount" text="$3,210" />
          <Item title="Award Amount" text="TBD" />
          <Item title="Confidence" text="80%" />
        </Level>
      </Box>
    );
  }
}

export default GrantHeader;
