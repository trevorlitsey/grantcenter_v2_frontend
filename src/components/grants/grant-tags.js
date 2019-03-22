import React, { PureComponent } from 'react';
import { arrayOf, string } from 'prop-types';

import Tag from 'react-bulma-components/lib/components/tag';

import SectionWithTitle from '../shared/section-with-title';

class GrantTags extends PureComponent {
  static propTypes = {
    tags: arrayOf(string).isRequired,
  };

  render() {
    const { tags } = this.props;

    return (
      <SectionWithTitle title="Tags">
        <Tag.Group>
          {tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Tag.Group>
      </SectionWithTitle>
    );
  }
}

export default GrantTags;
