export const project = {
  id: '123',
  name: 'Summer Education Workshops 2019',
  startDate: '2019-06-01',
  endDate: '2019-08-31',
  notes: 'These are some project notes',
  budget: 15000,
  location: {
    address: '456 14th St, Minneapolis, MN 55407',
  },
  tags: ['tag1', 'tag2'],
  funders: [
    {
      id: '456',
      name: 'Ford Foundation',
    },
  ],
  grants: [
    {
      id: '456',
      name: 'Summer 2018',
      funder: {
        id: '456',
        name: 'Ford Foundation',
      },
      dueDate: '2019-05-11',
      requestAmount: 5000,
    },
  ],
  contacts: [
    {
      id: '123',
      name: 'Larry Bird',
    },
  ],
};

export const projects = [project];
