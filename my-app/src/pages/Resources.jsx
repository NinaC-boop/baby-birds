import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Tabs } from 'antd';


import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  h1: {
    fontSize: 16,
  },
  h2: {
    fontSize: 13,
  },
  hr: {
    border: 0,
    height: 0.5,
    background:  'black',
    width: '80%',
    justifyContent: 'left',
    }
}));

export default function ResourcesPage() {
const classes = useStyles();
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

  return (
    <div>
        <Container className={classes.container}>
            <h1>Resources</h1>
            <hr className={classes.hr}></hr>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
                </TabPane>
            </Tabs>
        </Container>
    </div>
  );
}

