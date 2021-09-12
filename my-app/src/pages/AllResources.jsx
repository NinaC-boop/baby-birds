import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import classNames from "classnames";


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'white',
      borderRadius: 8,
    },
    title: {
        textAlign: 'left',
        padding: '50px',
    },
    tag: {
        height: 33,
        position: "relative",
        zIndex: 0,
        fontSize: 14,
        backgroundColor: 'white',
        margin: "0 4px",
        "& .MuiChip-label": {
          color: "#6ea78f",
        },
        "& .MuiChip-deleteIcon": {
          color: "#6ea78f",
        },
      },
  }));

  export default function AllResources() {
    const classes = useStyles();
        const handleDelete = () => {
            console.info('You clicked the delete icon.');
        };
        const handleClick = () => {
            console.info('You clicked the Chip.');
        };
      return (
        <div className={classes.title}>
            <h1>Resources</h1>
            <h2>Topics</h2>
            <Chip classes={{root: classNames(classes.tag)}} label="Anxiety" component="a" href="/resources/anxiety" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Domestic Violence" component="a" href="/resources/domestic_violence" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Mental Health" component="a" href="/resources/mental_health" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="LGBTQ+" component="a" href="/resources/lgbtq" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Bullying" component="a" href="/resources/bullying" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Disabilities" component="a" href="/resources/disabilities" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Men" component="a" href="/resources/men" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Women" component="a" href="/resources/women" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Youth" component="a" href="/resources/youth" clickable />
            <Chip classes={{root: classNames(classes.tag)}} label="Loneliness" component="a" href="/resources/loneliness" clickable />
        </div>

      );
    }