import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './select';
import { action } from '@storybook/addon-actions';

storiesOf('Form', module).add('<Select />', () => {
  const items = [
    {
      id: '1',
      name: 'one',
    },
    {
      id: '2',
      name: 'two',
    },
  ];

  const onCreate = async () =>
    new Promise(res => {
      setTimeout(() => res(console.log('promise resolved')), 1000);
    });

  return (
    <Select items={items} onChange={action('onChange')} onCreate={onCreate} />
  );
});
