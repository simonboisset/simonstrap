import { css } from '@emotion/css';

export type Direction = 'horizontal' | 'vertical';

export const directionStyle = (direction?: Direction) =>
  css({
    display: 'flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
  });
