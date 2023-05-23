import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch',color: 'white' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="First Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Message"
            />
          </div>
        </Box>
      );
    }