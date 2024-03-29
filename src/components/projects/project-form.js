import React, { Fragment, PureComponent } from 'react';
import * as Yup from 'yup';

import { Form, Input, Select } from '../shared/form';

const initialValues = {
  budget: undefined,
  endDate: '',
  location: {
    address: '',
    coordinates: [],
  },
  name: '',
  notes: '',
  startDate: '',
  tags: [{ id: '1', name: 'one' }],
};

const validationSchema = Yup.object().shape({
  budget: Yup.number(),
  endDate: Yup.string(),
  location: Yup.object().shape({
    address: Yup.string(),
    coordinates: Yup.array(Yup.string()),
  }),
  name: Yup.string().required('Please input a project name.'),
  notes: Yup.string(),
  startDate: Yup.string(),
  tags: Yup.string(),
});

class ProjectForm extends PureComponent {
  handleSubmit = (values, { setSubmitting }) => {
    // TODO
    setTimeout(() => {
      setSubmitting(false);
      console.log({ values });
    }, 1000);
  };

  render() {
    return (
      <Form
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, touched, errors, handleBlur, handleChange }) => (
          <Fragment>
            <Form.Control label="Name:*">
              <Input
                error={errors.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Ford Foundation"
                touched={touched.name}
                value={values.name}
              />
            </Form.Control>
            <Form.Control label="Start Date:">
              <Input
                name="startDate"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Start Date"
                type="date"
                value={values.startDate}
              />
            </Form.Control>
            <Form.Control label="End Date:">
              <Input
                name="endDate"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="End Date"
                type="date"
                value={values.endDate}
              />
            </Form.Control>
            <Form.Control label="Budget:">
              <Input.Dollar
                name="budget"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="10,000"
                type="number"
                value={values.budget}
              />
            </Form.Control>
            <Form.Control label="Address:">
              <Input.Address
                id="address"
                name="address"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="320 E 43rd St, New York, NY 10017"
                value={values.location.address}
              />
            </Form.Control>
            <Form.Control label="Tags:">
              <Select.Tags
                name="tags"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tags}
              />
            </Form.Control>
            <Form.Control label="Notes:">
              <Input.Textarea
                name="notes"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="The Ford Foundation is an American private foundation with the mission of advancing human welfare. Created in 1936 ..."
                value={values.notes}
              />
            </Form.Control>
          </Fragment>
        )}
      </Form>
    );
  }
}

export default ProjectForm;
