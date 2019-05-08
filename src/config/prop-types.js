import { arrayOf, bool, number, shape, string } from 'prop-types';

export const Contact = {
  archived: bool,
  email: string,
  id: string.isRequired,
  location: {
    address: string,
    coordinates: arrayOf(number),
  },
  name: string.isRequired,
  notes: string,
  phone: string,
  relationships: arrayOf(
    shape({
      funder: {
        id: string.isRequired,
        name: string.isRequired,
      },
      title: string.isRequired,
    })
  ).isRequired,
  tags: arrayOf(string),
};
