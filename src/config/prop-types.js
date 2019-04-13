import { arrayOf, bool, number, shape, string } from 'prop-types';

export const Contact = {
  id: string.isRequired,
  name: string.isRequired,
  location: {
    address: string,
    coordinates: arrayOf(number),
  },
  tags: arrayOf(string),
  relationships: arrayOf(
    shape({
      funder: {
        id: string.isRequired,
        name: string.isRequired,
      },
      title: string.isRequired,
    })
  ).isRequired,
  phone: string,
  email: string,
  notes: string,
  archived: bool,
};
