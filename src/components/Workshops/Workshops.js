import WorkshopItem from "./WorkshopItem";
import { Box, Grid } from "@material-ui/core";

const Workshops = ({courses,setCourses}) => {

  return (
    <>
      <Box p={10}>
        <Grid container spacing={8} >
          {courses &&  courses.map((card, id) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <WorkshopItem {...card} />
              </Grid>
            );
          })}
        </Grid>
      </Box>   
    </>
  );
};

export default Workshops;
