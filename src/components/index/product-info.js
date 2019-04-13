import React, { Fragment } from 'react';
import Heading from 'react-bulma-components/lib/components/heading';

import allGrants from '../../images/allGrants.png';

import './product-info.css';

const ArrowIcon = () => (
  <svg
    height="20"
    viewBox="0 0 24 24"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
      fill="white"
    />
  </svg>
);

const ListItem = ({ title, text }) => (
  <li>
    <ArrowIcon />
    <p className="has-text-weight-semibold is-size-5">
      {title}
      <br />
      <small className="has-text-weight-normal is-size-6">{text}</small>
    </p>
  </li>
);

const ProductInfo = () => (
  <div className="product-info--wrapper has-text-white">
    <Heading className="has-text-white">FREE during BETA period</Heading>
    <Heading className="has-text-white" subtitle>
      Then $7/month
    </Heading>
    <ul>
      <ListItem
        text="No credit card required."
        title="Receive full access for 12 months as a BETA subscriber"
      />
      <ListItem
        text="Upload grants by csv. Download all your data when you need it."
        title="Unlimited grant, funder, contact and project records"
      />
      <ListItem
        text="Two tiers of access available."
        title="Unlimited team members"
      />
      <ListItem
        text="Customizable by frequency and proximity of deadline."
        title="Automatic email reminders"
      />
      <ListItem
        text="Stay on top of budget progress for the fiscal year."
        title="Goal tracking"
      />
      <ListItem
        text={
          <Fragment>
            Questions? Contact the Grant Center team at{' '}
            <a className="has-text-white" href="mailto:support@grantcenter.io">
              support@grantcenter.io
            </a>
            . We're here to help any time.
          </Fragment>
        }
        title="Support"
      />
    </ul>
    <img alt="app preview" className="block is-hidden-mobile" src={allGrants} />
  </div>
);

export default ProductInfo;
