import React, { PureComponent } from 'react';
import { arrayOf, string } from 'prop-types';

import Tag from 'react-bulma-components/lib/components/tag';

import SectionWithTitle from './section-with-title';

class Tags extends PureComponent {
  static propTypes = {
    tags: arrayOf(string).isRequired,
  };

  render() {
    const { tags } = this.props;

    return (
      <SectionWithTitle title="Tags">
        <Tag.Group>
          {tags.map((tag, i) => (
            <Tag key={tag + i}>{tag}</Tag>
          ))}
        </Tag.Group>
      </SectionWithTitle>
    );
  }
}

export default Tags;
