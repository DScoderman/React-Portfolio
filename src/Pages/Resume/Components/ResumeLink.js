/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const ResumeLocation = (event) => event.onClick();

export default function Links() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',

        fontSize: 50,
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 50,
        },
      }}
      onClick={ResumeLocation}
    >
      <Link href="#" underline="hover" >Resume</Link>
      
    </Box>
  );
}