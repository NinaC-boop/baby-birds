import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: 8,
  },  
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  h1: {
    fontSize: 16,
  },
  h2: {
    fontSize: 13,
  },
  link: {
    colour: 'black',
    fontWeight: 500
  },
  hr: {
    border: 0,
    height: 0.5,
    background:  'black',
    width: '90%',
    justifyContent: 'left',
  },
  card: {
    margin: 20,
    border: "0.5px solid",
    borderColor: "black",
    borderRadius: 10,
    padding: 30,
    background:  'white',
    width: '50%',
    justifyContent: 'left',
    },
    phoneNumber: {
      display: 'flex',
      flexDirection: 'row',
      flexFlow: 'center',
      justifyContent: 'space-between'
    },
}));

export default function DomesticViolence() {
  const classes = useStyles();

  return (
    <div>
        <Container className={classes.container}>
            <h1>Resources</h1>
            <hr className={classes.hr}></hr>


            <div className={classes.card}>
              <a href="https://www.1800respect.org.au/" className={classes.link}>1800Respect</a>
              <p>1800RESPECT is the national online and telephone counselling and support service for people who have experienced, or are at risk of experiencing, sexual assault and/or domestic and family violence, their family and friends, and frontline and isolated workers.</p>
              <div className={classes.phoneNumber}>
                <i>Call service:</i>
                <p>1800Respect</p>
                <p>24/7</p>
              </div>
            </div>

            <div className={classes.card}>
              <a href="https://www.facs.nsw.gov.au/domestic-violence/helpline" className={classes.link}>Domestic Violence Line (NSW)</a>
              <p>The NSW Domestic Violence Line provides counselling and referrals to women experiencing domestic and family violence.</p>
              <div className={classes.phoneNumber}>
                <i>Call service:</i>
                <p>1800 65 64 63</p>
                <p>24/7</p>
              </div>
            </div>

            <div className={classes.card}>
              <a href="https://mensline.org.au/" className={classes.link}>MensLine</a>
              <p>MensLine Australia offers telephone, online chat and video counselling for men with family and relationship concerns.</p>
              <div className={classes.phoneNumber}>
                <i>Call service:</i>
                <p>1300 78 99 78</p>
                <p>24/7</p>
              </div>
            </div>

            <div className={classes.card}>
              <a href="https://kidshelpline.com.au/" className={classes.link}>Kids Helpline</a>
              <p>Kids Helpline is Australia’s only free (even from a mobile), confidential 24/7 online and phone counselling service for young people aged 5 to 25.</p>
              <div className={classes.phoneNumber}>
                <i>Call service:</i>
                <p>1800 551 800</p>
                <p>24/7</p>
              </div>
            </div>
        </Container>

    </div>
  );
}

