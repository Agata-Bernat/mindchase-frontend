import React from "react";
import Workshops from "../Workshops/Workshops";


const IconsGrid = ({courses,setCourses}) => {

  return (
    <>
      <Workshops 
      courses={courses}
      />
        <h1>Icon Grid</h1>
      {}
    </>
  );
};

export default IconsGrid;
