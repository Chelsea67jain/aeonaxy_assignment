import React from 'react'
import LearningPath from '../images/learning path.jpg';

const CoursesComponent = (props) => {
  return (
    <>
     
      <div className="p-5 flex items-center flex-row border-box h-30 w-96 sm:w-80 border-2 mt-8 mr-4 rounded-md">
        <div className="flex flex-col">
          <b>{props.heading}</b>
          <span>
            Build your foundational skills in algebra, geometry, and
            probability.
          </span>
        </div>
        <img src={`${LearningPath}`} className="h-30 w-20" />
      </div>
    </>
  );
}

export default CoursesComponent;
