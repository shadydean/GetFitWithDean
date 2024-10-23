import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]); // State to store the courses
  const [registeredCourse, setRegisteredCourse] = useState(''); // State to track the registered course
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch courses on component mount
  useEffect(() => {
    const getCourses = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/courses");
          setCourses(response.data); // Assuming the courses are at the root
        } catch (error) {
          console.error("Error fetching courses:", error);
        }finally{
            setLoading(false); // Set loading state to false after fetching courses
        }
      };

    getCourses(); // Call the fetch function
  }, []); // Empty dependency array to run once on mount

  const handleBuy = (name) => {
    // Logic to handle course purchase
    console.log(`Buying course: ${name}`);
    setRegisteredCourse(name); // Update registered course
  };

  const handleSwitch = (name) => {
    // Logic to handle course switch
    console.log(`Switching to course: ${name}`);
    setRegisteredCourse(title); // Update registered course
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an error
  }

  return (
    <div>
        <h1 className="mt-20 text-2xl font-bold text-center">Available Courses</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => {
          if (course.name === registeredCourse) {
            return null;
          }
          return (
            <CourseCard
              key={course.name}
              title={course.name}
              description={course.description}
              onBuy={() => handleBuy(course.name)}
              isRegistered={registeredCourse === course.name}
              onSwitch={() => handleSwitch(course.name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;