import React, { Fragment, PureComponent } from 'react';
import * as Yup from 'yup';

import { Form, Input } from '../shared/form';

const initialValues = {
  name: '',
  startDate: '',
  endDate: '',
  budget: undefined,
  location: {
    address: '',
    coordinates: [],
  },
  tags: '',
  notes: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please input a project name.'),
  startDate: Yup.string(),
  endDate: Yup.string(),
  budget: Yup.number(),
  location: Yup.object().shape({
    address: Yup.string(),
    coordinates: Yup.array(Yup.string()),
  }),
  tags: Yup.string(),
  notes: Yup.string(),
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
                onBlur={handleBlur}
                onChange={handleChange}
                name="name"
                placeholder="Ford Foundation"
                touched={touched.name}
                value={values.name}
              />
            </Form.Control>
            <Form.Control label="Start Date:">
              <Input
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                name="startDate"
                placeholder="Start Date"
                value={values.startDate}
              />
            </Form.Control>
            <Form.Control label="End Date:">
              <Input
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                name="endDate"
                placeholder="End Date"
                value={values.endDate}
              />
            </Form.Control>
            <Form.Control label="Budget:">
              <Input.Dollar
                onBlur={handleBlur}
                onChange={handleChange}
                name="budget"
                placeholder="10,000"
                type="number"
                value={values.budget}
              />
            </Form.Control>
            <Form.Control label="Address:">
              <Input.Address
                id="address"
                onBlur={handleBlur}
                onChange={handleChange}
                name="address"
                placeholder="320 E 43rd St, New York, NY 10017"
                value={values.location.address}
              />
            </Form.Control>
            <Form.Control label="Tags:">
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                name="tags"
                placeholder="comma,separated,list"
                value={values.tags}
              />
            </Form.Control>
            <Form.Control label="Notes:">
              <Input.Textarea
                onBlur={handleBlur}
                onChange={handleChange}
                name="notes"
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
