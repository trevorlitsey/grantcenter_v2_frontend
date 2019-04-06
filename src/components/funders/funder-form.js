import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from 'react-bulma-components/lib/components/button';
import Content from 'react-bulma-components/lib/components/content';
import { Control, Field } from 'react-bulma-components/lib/components/form';

import { FormControl, Input } from '../shared/form';

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
  handleSubmit = () => {
    // TODO
  };

  render() {
    return (
      <Content>
        <Formik
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
            handleReset,
          }) => (
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <FormControl label="Name:*">
                <Input
                  error={errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="name"
                  placeholder="Ford Foundation"
                  touched={touched.name}
                  value={values.name}
                />
              </FormControl>
              <FormControl label="Mission Focus:">
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="missionFocus"
                  placeholder="Social Justice, Diversity"
                  value={values.missionFocus}
                />
              </FormControl>
              <FormControl label="Address:">
                <Input.Address
                  id="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="address"
                  placeholder="320 E 43rd St, New York, NY 10017"
                  value={values.location.address}
                />
              </FormControl>
              <FormControl label="Average Annual Giving:">
                <Input.Dollar
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="annualGiving"
                  placeholder="127,865,430"
                  type="number"
                  value={
                    values.annualGiving
                      ? String(values.annualGiving)
                      : undefined
                  }
                />
              </FormControl>
              <FormControl label="Tags:">
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="tags"
                  placeholder="comma,separated,list"
                  value={values.tags}
                />
              </FormControl>
              <FormControl label="Notes:">
                <Input.Textarea
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="notes"
                  placeholder="The Ford Foundation is an American private foundation with the mission of advancing human welfare. Created in 1936 ..."
                  value={values.notes}
                />
              </FormControl>
              <Field kind="group">
                <Control>
                  <Button color="link" disabled={isSubmitting} type="submit">
                    Submit
                  </Button>
                </Control>
                <Control>
                  <Button type="reset">Cancel</Button>
                </Control>
              </Field>
            </form>
          )}
        </Formik>
      </Content>
    );
  }
}

export default FunderForm;
