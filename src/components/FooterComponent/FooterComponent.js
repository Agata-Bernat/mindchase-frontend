import React from 'react';
import logo from '../../images/logo.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
  Grid,
  ListItem,
  List,
  ListItemAvatar,
  makeStyles,
  Hidden,
} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  footer_icons: {
    fontSize: '8rem',
    color: 'blue'
  },
  Follow:{
    color:'blue',
    align: 'left',
  },
  text: {
    fontSize: '1.1rem',
  },
  logo: {
    fontSize: '8rem',
    color: 'yellow',
  },

  LinkedInIcon:{
    fontSize: '3rem',
    color: 'blue' 
  },
  instagramIcon:{
    height:'8rm',
    width:'9rm',
    color:'#EE82EE',
    fontSize: 40 ,
  }


}

));

const FooterComponent = () => {
  const classes = useStyles();
  return (
    <div className='footer'>

      <Hidden smDown>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'>
          <Grid item sm={12} xs={12} md={4}>
              <div className='childe1__container'>
              <div>
                <img src={logo} alt="Logo" styles="width:2em; hight:3em;" />
              </div>
              </div>
            </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='childe2__container'>
              <div className='childe2__title'>
              <h3 className= {classes.Follow}>Follow us : </h3>

                <List dense>
                  <ListItem>
                      <ListItemAvatar>
                        <LinkedInIcon className={classes.LinkedInIcon}  />    
                      </ListItemAvatar>
                      <ListItem className={classes.text}>LinkedIn 
                        <div> </div>
                      </ListItem>
                  </ListItem> 

                  <ListItem>
                      <ListItemAvatar>
                        <InstagramIcon className={classes.instagramIcon}/>
                      </ListItemAvatar>
                    </ListItem>
                </List>
                </div>
              </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='child3__container'>
              <div className='child3__title'>
                <h1>About Us MindChase</h1>
                <p className={classes.text}>
                  We are Fun guys , we do fun things and stuff 
                  Learn with us all the new stuff and things 
                </p>
              </div>
            </div>
          </Grid>

        </Grid>
      </Hidden>
  
    </div>
  );
};

export default FooterComponent;
