import { css } from 'linaria';

const extraSmall = 4;
const small = 8;
const medium = 12;
const large = 16;
const extraLarge = 20;

export const marginBottom = {
  extraSmall: css`
    margin-bottom: ${extraSmall}px;
  `,
  small: css`
    margin-bottom: ${small}px;
  `,
  medium: css`
    margin-bottom: ${medium}px;
  `,
  large: css`
    margin-bottom: ${large}px;
  `,
  extraLarge: css`
    margin-bottom: ${extraLarge}px;
  `,
};
