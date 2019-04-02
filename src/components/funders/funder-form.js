import React, { PureComponent } from 'react';

import Content from 'react-bulma-components/lib/components/content';
import { Input, Textarea } from 'react-bulma-components/lib/components/form';

import { FormControl } from '../shared/form';

class FunderForm extends PureComponent {
  handleChange = () => {
    // TODO
  };

  render() {
    return (
      <Content>
        <form>
          <FormControl label="Name:*">
            <Input
              onChange={this.handleChange}
              name="name"
              placeholder="Ford Foundation"
            />
          </FormControl>
          <FormControl label="Mission Focus:">
            <Input
              onChange={this.handleChange}
              name="missionFocus"
              placeholder="Social Justice, Diversity"
            />
          </FormControl>
          <FormControl label="Address:">
            <Input
              onChange={this.handleChange}
              name="address"
              placeholder="320 E 43rd St, New York, NY 10017"
            />
          </FormControl>
          <FormControl label="Average Annual Giving:">
            <Input
              onChange={this.handleChange}
              name="annualGiving"
              placeholder="127,865,430"
            />
          </FormControl>
          <FormControl label="Tags:">
            <Input
              onChange={this.handleChange}
              name="tags"
              placeholder="comma,separated,list"
            />
          </FormControl>
          <FormControl label="Notes:">
            <Textarea
              onChange={this.handleChange}
              name="notes"
              placeholder="The Ford Foundation is an American private foundation with the mission of advancing human welfare. Created in 1936 ..."
            />
          </FormControl>
        </form>
      </Content>
    );
  }
}

export default FunderForm;
