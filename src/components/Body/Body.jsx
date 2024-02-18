import { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import PropTypes from 'prop-types'

const Body = ({ handleAddCourseCard }) => {
    const [courseCard, setCourseCard] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourseCard(data))
    },[])
    
    return (
        <div className="w-9/12">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {
                courseCard.map(courseCard => <CourseCard
                     key={courseCard.id} 
                      handleAddCourseCard={ handleAddCourseCard } 
                      courseCard={courseCard}
                      ></CourseCard>)
              }
              </div>
        </div>
    );
};

Body.propTypes = {
    handleAddCourseCard: PropTypes.func
}

export default Body;