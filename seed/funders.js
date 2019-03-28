import { contacts } from './contacts';

export const funder = {
  id: '123',
  name: 'Ford Foundation',
  missionFocus: 'Arts and Education',
  annualGiving: 10000,
  location: {
    address: '123 Main St, Minneapolis, MN 55408',
    coordinates: [100.1, 22.33],
  },
  tags: ['tag1', 'tag2'],
  notes: 'Some funder notes',
  contacts,
};

export const funders = [funder];
