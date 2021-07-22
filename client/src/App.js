import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles.js';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { getAdSpots } from './actions/adSpots.js';
import Navbar from './components/Navbar/Navbar.js';
import Section1 from './components/Home/Section1.js';
import Section2 from './components/Home/Section2.js';
import Section3 from './components/Home/Section3.js';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Lato'
      ].join(','),
    },
  });

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdSpots());
    }, [dispatch]);
    
    return (
        <ThemeProvider theme={theme}><Container maxWidth="false">
            <Navbar />
            <Container className={classes.Section1}>
                <Section1 />
            </Container>
            <Container className={classes.Section2}>
                <Section2 />
            </Container>
            <Container className={classes.Section3}>
                <Section3 />
            </Container>
        </Container></ThemeProvider>
    );
};

export default App;