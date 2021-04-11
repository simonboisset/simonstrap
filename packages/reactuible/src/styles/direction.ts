import { makeStyles } from '@material-ui/core';
import { Theme } from '../components/MuiKitProvider';

export type Direction = 'horizontal' | 'vertical';

export const useDirectionStyle = makeStyles<Theme, { direction?: Direction }, 'direction'>({
  direction: props => ({
    display: 'flex',
    flexDirection: props.direction === 'vertical' ? 'column' : 'row'
  })
});
