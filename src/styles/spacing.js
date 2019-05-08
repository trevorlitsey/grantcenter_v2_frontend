import { css } from 'linaria';

export const extraSmall = 4;
export const small = 8;
export const medium = 12;
export const large = 16;
export const extraLarge = 20;

export const marginBottom = {
  extraLarge: css`
    margin-bottom: ${extraLarge}px;
  `,
  extraSmall: css`
    margin-bottom: ${extraSmall}px;
  `,
  large: css`
    margin-bottom: ${large}px;
  `,
  medium: css`
    margin-bottom: ${medium}px;
  `,
  small: css`
    margin-bottom: ${small}px;
  `,
};
