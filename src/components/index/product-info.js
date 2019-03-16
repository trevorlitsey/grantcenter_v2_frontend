import React from 'react';

import allGrants from '../../images/allGrants.png';

import './product-info.css';

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path
      fill="white"
      d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
    />
  </svg>
);

const ProductInfo = () => (
  <div className="hero--sign-up hero--blue">
    <div className="content--product-page">
      <div className="wrapper--product-info">
        <h1 className="title">FREE during BETA period</h1>
        <h1 className="subtitle">Then $7/month</h1>
        <ul>
          <li>
            <Icon />
            <p>
              Receive full access for 12 months as a BETA subscriber
              <br />
              <small>No credit card required.</small>
            </p>
          </li>

          <li>
            <Icon />
            <p>
              Unlimited grant, funder, contact and project records
              <br />
              <small>
                Upload grants by csv. Download all your data when you need it.
              </small>
            </p>
          </li>
          <li>
            <Icon />
            <p>
              Unlimited team members
              <br />
              <small>Two tiers of access available.</small>
            </p>
          </li>
          <li>
            <Icon />
            <p>
              Automatic email reminders
              <br />
              <small>
                Customizable by frequency and proximity of deadline.
              </small>
            </p>
          </li>
          <li>
            <Icon />{' '}
            <p>
              Goal tracking
              <br />
              <small>Stay on top of budget progress for the fiscal year.</small>
            </p>
          </li>
          <li className="li-support">
            <Icon />{' '}
            <p>
              Support
              <br />
              <small>
                Questions? Contact the Grant Center team at{' '}
                <a
                  href="mailto:support@grantcenter.io"
                  style={{ color: 'white' }}
                >
                  support@grantcenter.io
                </a>
                . We're here to help any time.
              </small>
            </p>
          </li>
        </ul>
      </div>
      <div className="app-preview">
        <img src={allGrants} alt="app preview" />
      </div>
    </div>
  </div>
);

export default ProductInfo;
