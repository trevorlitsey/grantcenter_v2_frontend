import React, { Fragment, PureComponent } from 'react';
import * as Yup from 'yup';

import { Form, Input, Select } from '../shared/form';

const initialValues = {
  annualGiving: undefined,
  location: {
    address: '',
    coordinates: [],
  },
  missionFocus: '',
  name: '',
  notes: '',
  tags: [],
};

const validationSchema = Yup.object().shape({
  awardAmount: Yup.number(),
  confidence: Yup.number(),
  dueDate: Yup.string(),
  funder: Yup.object().shape({
    id: Yup.string(),
    name: Yup.string(),
  }),
  isRolling: Yup.boolean(),
  name: Yup.string().required('Please input a funder name.'),
  notes: Yup.string(),
  project: Yup.object().shape({
    id: Yup.string(),
    name: Yup.string(),
  }),
  requestAmount: Yup.number().required('Please input a request amount'),
  status: Yup.string(),
  tags: Yup.string(),
});

class GrantForm extends PureComponent {
  handleSubmit = (values, { setSubmitting }) => {
    // TODO
    setTimeout(() => {
      setSubmitting(false);
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
            <Form.Control label="Funder:*">
              <Select.Funder
                error={errors.funder && errors.funder.id}
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.funder}
                value={values.funder}
              />
            </Form.Control>
            <Form.Control label="Request Amount:*">
              <Input.Dollar
                name="requestAmount"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="10,000"
                type="number"
                value={values.requestAmount}
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

export default GrantForm;
