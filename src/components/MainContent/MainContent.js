import React from 'react';
import { Grid, Button, makeStyles, Typography } from '@material-ui/core';
import school from '../../images/scho.svg';
import './MainContent.css';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  content: {
    fontSize: '1.2rem',
  },
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    '&:hover': {
      background: '#ffe082'
    }
  },
  btn: {
    color: 'black',
    border: '1px solid red',
    background: 'red'
  },
  imgText: {
    color: ' white',
    border: '1px solid white',
    width: '100%',
    textAlign: 'right',
    paddingRight: '10px',
    zIndex: '-1',
    fontSize: '2rem',
    padding: '90px',
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={5} item>
          <div className='me'>
            <p className={classes.imgText}>fun fun time</p>
          </div>
        </Grid>

        <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>Be a Hero</Typography>
            <p className={classes.content}>
            You never have enough time and every day is just to short to get things done? What if you learn how to structure your day, how to prioritize your tasks and still have enough time for your friends, family and hobbies?
            </p>
            <Button variant='outlined' className={classes.btn}
               to='/register'
               component={Link} 
            >
              Read More
            </Button>
          </div>
        </Grid>
      </Grid>
      {/* Container 2 */}
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>Success is our priority</Typography>
            <p className={classes.content}>
            wouldn't it be great to know exactly what drives you most and helps you to channel your strengths and achieve your goal easily?
            </p>
            <Button className={classes.btn} variant='outlined' color='primary'
               to='/register'
               component={Link} 
            >
              Read More
            </Button>
          </div>
        </Grid>

        <Grid md={5} item>
          <div className='main'>
            <img
              style={{ width: '80%', height: '30rem' }}
              src={school}
              alt=''
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainContent;
