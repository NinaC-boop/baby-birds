import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: 8,
  },

}));

export default function Chatbot() {
const classes = useStyles();

  return (
    <div >
      <Container maxWidth="sm" className={classes.root}>
        <Box>
          hiß
        </Box>
      </Container>
    </div>
  );
}

