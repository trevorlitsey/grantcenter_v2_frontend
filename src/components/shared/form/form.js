import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';
import { Formik } from 'formik';

import Button from 'react-bulma-components/lib/components/button';
import Content from 'react-bulma-components/lib/components/content';
import { Control, Field } from 'react-bulma-components/lib/components/form';

import FormControl from './form-control';

class Form extends PureComponent {
  static propTypes = {
    initialValues: object.isRequired,
    onSubmit: func.isRequired,
    validationSchema: object.isRequired,
  };

  static defaultProps = {
    initialValues: {},
  };

  render() {
    const { children, initialValues, onSubmit, validationSchema } = this.props;

    return (
      <Content>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
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
              {children({
                values,
                touched,
                errors,
                isSubmitting,
                handleBlur,
                handleChange,
                handleSubmit,
                handleReset,
              })}
              <Field kind="group">
                <Control>
                  <Button color="link" disabled={isSubmitting} type="submit">
                    Submit
                  </Button>
                </Control>
                <Control>
                  <Button disabled={isSubmitting} type="reset">
                    Cancel
                  </Button>
                </Control>
              </Field>
            </form>
          )}
        </Formik>
      </Content>
    );
  }
}

Form.Control = FormControl;

export default Form;
