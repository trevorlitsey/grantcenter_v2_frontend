import { css } from 'linaria';

export const extraSmall = 4;
export const small = 8;
export const medium = 12;
export const large = 16;
export const extraLarge = 20;

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
