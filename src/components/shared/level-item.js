import React from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';

const style = {
  textAlign: 'center',
};

const LevelItem = ({ title, text }) => (
  <Level.Item style={style}>
    <div>
      <Heading heading renderAs="p">
        {title}
      </Heading>
      <Heading renderAs="p">{text}</Heading>
    </div>
  </Level.Item>
);

export default LevelItem;
