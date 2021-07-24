import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion  from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./WorkshopBodyHeader.css";
import VideoPlayer from '../video/VideoPlayer'
import useToken from '../useToken';
import {Card} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  video:{
    align:'center',
  }

}));

const WorkshopsBody = ({title}) => {
  const { token} = useToken();

  const classes = useStyles();

  return (
    <>
      {/* header intro & place for video/ prezzie ?
       */}
      <div className="workshopBodyHeader">
        <h2>{title} automate this step weasel</h2>
        <div>
          <h3>convert to pdf - can also do iframe in that case</h3>
          <h3>convert presentations to slideshows</h3>
        </div>
        <div>
          in iframe, can process as big string, then search and replace width/
          height for our preferred size
        </div>
      </div>

      {/* course content - accordion */}
      <div className={classes.root}>
        <h2>Workshop content</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            What if you are finally empowered to know what you want and you go to bed and know that you take the right decisions and actions to reach it
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            What if you are standing in a crowd o people and everyone is eagerly listening to your every word
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
            What if you are standing in a crowd o people and everyone is eagerly listening to your every word
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      <Card className={classes.video}   align='center' width= '100%' height='%100' >
        {token && <VideoPlayer /> }     
          </Card>

    </>
  );
};

export default WorkshopsBody;
