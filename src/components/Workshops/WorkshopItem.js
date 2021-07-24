import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import VideoPlayer from '../video/VideoPlayer'
import {
      Card,
      CardActionArea,
      CardActions,
      CardContent,
      CardMedia,
      Button,
      Typography,
      makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      position :"relative",
    },
    root1:{
      marginTop:60,
      marginLeft:90,

    },
  text1:{
      color:'black'
    },
    media: {
      height: 140,
    },
    link: {
      textDecoration: 'none'
    }
});

const WorkshopItem = (props) => {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(false);
  const { path, url } = useRouteMatch();
  console.log("url:", url);
  console.log("path:", path);
  
  return (
    <div className={classes.root1}>
      <Link to={`${url}/${props.route}`}
      className={classes.link}
        >

        <Card
          className={classes.root}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}   
            >

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt={props.alt}
                    image={props.image}
                    title={props.title}
                  />

                <CardContent >
                    <Typography variant="h5" component="h2" 
                        className={classes.text1}  align ='center'>
                      {props.title}
                    </Typography>
                  </CardContent>

              </CardActionArea>
          </Card>
      </Link>

      {isShown && (
        <Card
          className={classes.root}
          variant="outlined"   
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="red"
              gutterBottom
              align = 'center'    
            >

              Fetch last updated: 01/2021
            </Typography>
            
            <Typography variant="h5" component="h2"
              className={classes.text1}
              align = 'center'         
            >

              <Link to={`${url}/${props.id}`}                  
                  className={classes.link}
     
                  >{props.title}</Link>
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="secondary"
               to='/video-player'
               component={Link} 
            >
             Reade Moor
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default WorkshopItem;
