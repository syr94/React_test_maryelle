import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cherry from './../img/case_beri/cherry.jpg';
import Blackberry from './../img/case_beri/blackberry.jpg';
import Blackcurrant from './../img/case_beri/blackcurrant.jpg';
import Redcurrant from './../img/case_beri/redcurrant.jpg';
import Blueberry from './../img/case_beri/blueberry.jpg';
import Raspberry from './../img/case_beri/raspberry.jpg';
import Cranberry from './../img/case_beri/cranberry.jpg';
import Strawberry from './../img/case_beri/strawberry.jpg';
import './BodyComponent_2.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft : '27%',
    paddingRight: '20%',
    paddingTop: '20px',
    textAlign: 'center',

  },
  paper: {
   // padding: theme.spacing(100),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs = {6}>
          <Paper className={classes.paper}>
              <img src = {Cherry} className="berry_img"></img>
              <p className="berry_text">Freshiest Cherry from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
        <Grid item xs = {6}>
          <Paper className={classes.paper}>
              <img src = {Blackberry} className="berry_img"></img>
              <p className="berry_text">Freshiest Blackberry from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
    

        <Grid item xs = {6}>
          <Paper className={classes.paper}>
              <img src = {Blackcurrant} className="berry_img"></img>
              <p className="berry_text">Freshiest Blackcurrant from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
        <Grid item xs = {6}>
          <Paper className={classes.paper}>
              <img src = {Redcurrant} className="berry_img"></img>
              <p className="berry_text">Freshiest Redcurrant from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
    
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <img src = {Cranberry} className="berry_img"></img>
              <p className="berry_text">Freshiest Cranberry from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
        <Grid item xs = {6}>
          <Paper className={classes.paper}>
              <img src = {Strawberry} className="berry_img"></img>
              <p className="berry_text">Freshiest Strawberry from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
        <Grid item xs = {6}>
          <Paper className={classes.paper}>
              <img src = {Raspberry} className="berry_img"></img>
              <p className="berry_text">Freshiest Raspberry from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
        <Grid item xs = {6}>
          <Paper className={classes.paper}>
              <img src = {Blueberry} className="berry_img"></img>
              <p className="berry_text">Freshiest Blueberry from Kazahstan. It was grown with love. 6$ per 1 kg</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}