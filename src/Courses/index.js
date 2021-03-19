import React, { useContext } from 'react';
import CourseCard from '../CourseCard'

import { courses } from '../../database';

const Courses = () => {

    return (
    <main>
        <section>
        {courses.map((course, index) => 
          <CourseCard 
          key={index}
          img={course.url} 
          title={course.name}
          price={course.price}
          />
        )}
        </section>
      </main>
    )
}

export default Courses;