import React, { Fragment, PureComponent } from 'react';
import * as Yup from 'yup';
import { Select as BulmaSelect } from 'react-bulma-components/lib/components/form';
import { Form, Input, Select } from '../shared/form';
import { ReportStatuses } from '../../constants';

const initialValues = {
  dueDate: '',
  grant: undefined,
  name: '',
  notes: '',
  status: ReportStatuses.NOT_STARTED,
  tags: [],
};

const validationSchema = Yup.object().shape({
  dueDate: Yup.string().required('Please supply a due date'),
  grant: Yup.object({
    id: Yup.string().required('Please supply a grant to link to this report'), // TODO: how to require object to be here...
    name: Yup.string(),
  }),
  name: Yup.string().required('Please supply a name'),
  notes: Yup.string(),
  status: Yup.string().required('Please provide a status'),
  tags: Yup.string(),
});

class ReportForm extends PureComponent {
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
                placeholder="Final Report"
                touched={touched.name}
                value={values.name}
              />
            </Form.Control>
            <Form.Control label="Due Date:">
              <Input
                error={errors.dueDate}
                name="dueDate"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Due Date"
                touched={touched.dueDate}
                type="date"
                value={values.dueDate}
              />
            </Form.Control>
            <Form.Control label="Grant:">
              <Select.Grant
                error={errors.grant && errors.grant.id}
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.grant}
                value={values.grant}
              />
            </Form.Control>
            <Form.Control label="Status:">
              <BulmaSelect
                name="status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
              >
                <option value={ReportStatuses.NOT_STARTED}>Not Started</option>
                <option value={ReportStatuses.DRAFT}>Draft</option>
                <option value={ReportStatuses.SUBMITTED}>Submitted</option>
                <option value={ReportStatuses.SUBMITTED}>Closed</option>
              </BulmaSelect>
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

export default ReportForm;
