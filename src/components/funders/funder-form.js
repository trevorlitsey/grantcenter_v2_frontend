import React, { Fragment, PureComponent } from 'react';
import * as Yup from 'yup';

import { Form, Input } from '../shared/form';

const initialValues = {
  name: '',
  missionFocus: '',
  location: {
    address: '',
    coordinates: [],
  },
  annualGiving: undefined,
  tags: '',
  notes: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please input a funder name.'),
  missionFocus: Yup.string(),
  location: Yup.object().shape({
    address: Yup.string(),
    coordinates: Yup.array(Yup.string()),
  }),
  annualGiving: Yup.number(),
  tags: Yup.string(),
  notes: Yup.string(),
});

class FunderForm extends PureComponent {
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
                onBlur={handleBlur}
                onChange={handleChange}
                name="name"
                placeholder="Ford Foundation"
                touched={touched.name}
                value={values.name}
              />
            </Form.Control>
            <Form.Control label="Mission Focus:">
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                name="missionFocus"
                placeholder="Social Justice, Diversity"
                value={values.missionFocus}
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
            <Form.Control label="Average Annual Giving:">
              <Input.Dollar
                onBlur={handleBlur}
                onChange={handleChange}
                name="annualGiving"
                placeholder="127,865,430"
                type="number"
                value={
                  values.annualGiving ? String(values.annualGiving) : undefined
                }
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

export default FunderForm;
