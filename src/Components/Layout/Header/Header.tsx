import * as React from 'react';

/** Design System Components */
import Typography from '@mui/material/Typography';

/** Components */

/** Types */

interface IAppProps {
}

export function Header (props: IAppProps) {
  return (<Typography variant='h3' component='h2'>The Tremendous Typing Test</Typography>);
}

export default Header;
