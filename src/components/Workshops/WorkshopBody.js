import React,{useState ,useEffect }from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./WorkshopBodyHeader.css";
import VideoPlayer from '../video/VideoPlayer'
import useToken from '../useToken';
import {Card} from "@material-ui/core";
import Workshops from "../Workshops/Workshops";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  video:{
    align:'center',
  }

}));

const WorkshopsBody = ({title}) => {
  const { token} = useToken();
  const classes = useStyles();
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get("/courses")
      setCourses(response.data)
    }
    getCourses()
  }, [])

  return (
    <>
   <Workshops 
          courses={courses}
          />
          
          {/**    
      <Card className={classes.video}   align='center' width= '100%' height='%100' >
        {token && <VideoPlayer /> }     
          </Card>
*/}
    </>
  );
};

export default WorkshopsBody;
