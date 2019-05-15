import React, { Fragment, PureComponent } from 'react';
import * as Yup from 'yup';
import {
  Select as BulmaSelect,
  Checkbox,
} from 'react-bulma-components/lib/components/form';
import { GrantStatuses } from '../../constants';
import { convertSnakeCaseToUpperCase } from '../../helpers';
import { extraSmall } from '../../styles/spacing';
import { Form, Input, Select } from '../shared/form';

const initialValues = {
  confidence: 100,
  dueDate: '',
  funder: undefined,
  isRolling: false,
  name: '',
  notes: '',
  project: undefined,
  requestAmount: 0,
  status: GrantStatuses.PROSPECTIVE,
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
  name: Yup.string().required('Please input a grant name.'),
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
    setTimeout(() => {
      console.log(values);
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
                error={errors.requestAmount}
                name="requestAmount"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="10,000"
                value={values.requestAmount}
              />
            </Form.Control>
            <Form.Control label="Confidence:">
              <BulmaSelect
                name="confidence"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confidence}
              >
                <option value="100">100%</option>
                <option value="90">90%</option>
                <option value="80">80%</option>
                <option value="70">70%</option>
                <option value="60">60%</option>
                <option value="50">50%</option>
                <option value="40">40%</option>
                <option value="30">30%</option>
                <option value="20">20%</option>
                <option value="10">10%</option>
                <option value="0">0%</option>
              </BulmaSelect>
            </Form.Control>
            <Form.Control label="Application Status:">
              <BulmaSelect
                name="status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
              >
                {Object.entries(GrantStatuses).map(([key, value]) => (
                  <option key={key} value={key}>
                    {convertSnakeCaseToUpperCase(value)}
                  </option>
                ))}
              </BulmaSelect>
            </Form.Control>
            <Form.Control label="Due Date:">
              <Input
                name="dueDate"
                onBlur={handleBlur}
                onChange={handleChange}
                type="date"
                value={values.dueDate}
              />
              <br />
              <Checkbox
                checked={values.isRolling}
                name="isRolling"
                onBlur={handleBlur}
                onChange={handleChange}
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  marginTop: extraSmall,
                }}
              >
                <span style={{ marginLeft: extraSmall }}>Is rolling</span>
              </Checkbox>
            </Form.Control>
            <Form.Control label="Project:">
              <Select.Project
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.project}
                value={values.project}
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
