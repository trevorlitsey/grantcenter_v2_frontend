import React from 'react';
import { Link } from 'gatsby';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';
import Button from 'react-bulma-components/lib/components/button';
import Heading from 'react-bulma-components/lib/components/heading';

const SignUpNow = () => (
  <Section className="has-text-centered">
    <Content>
      <Heading
        className="has-text-weight-normal has-text-white is-size-3-mobile"
        size={1}
      >
        GRANT <strong className="has-text-weight-semibold">CENTER</strong>
      </Heading>
      <Heading
        className="has-text-white is-size-5-mobile"
        renderAs="h2"
        size={4}
        subtitle
      >
        All your grants in one place.
      </Heading>
      <Button size="large" outlined color="white" renderAs={Link} to="/signup">
        SIGN UP NOW
      </Button>
    </Content>
    <hr style={{ height: 1 }} />
  </Section>
);

export default SignUpNow;
