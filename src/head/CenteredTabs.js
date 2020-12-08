import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Head.css'
import { useState } from 'react'
import Main_Body from './../main_body/Main_Body'
import HeadBelow from './HeadBelow'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    useState[0] = newValue;
  };

  return (
    <div>
    <div className = "head_middle">
      
      <div className = "label">
        <h2 className = "name">Maryelle</h2>
      </div>
      <div className="menu">
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Our Story" />
            <Tab label="Assortment" />
            <Tab label="Contacts" />
          </Tabs>
        </Paper>
        </div>
      </div>
      <HeadBelow />
      <Main_Body  />
    </div>
  );
}
