import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]); // State to store the courses
  const [registeredCourse, setRegisteredCourse] = useState(null); // State to track the registered course
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch courses on component mount
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        console.log(response)
        setCourses(response.data); // Assuming the courses are at the root
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Could not fetch courses. Please try again later."); // Set error state
      } finally {
        setLoading(false); // Set loading state to false after fetching courses
      }
    };

    getCourses(); // Call the fetch function
  }, []); // Empty dependency array to run once on mount

  const handleBuy = (course) => {
    // Logic to handle course purchase
    console.log(`Buying course: ${course.name}`);
    setRegisteredCourse(course); // Update registered course
  };

  const handleSwitch = (course) => {
    console.log(`Switching to course: ${course.name}`);
    setRegisteredCourse(course); // Update registered course
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
        {courses.map((course) => (
          <CourseCard
            key={course._id} // Use _id as the key for better uniqueness
            title={course.name}
            description={course.description}
            price={course.price} // Assuming you want to show the price too
            onBuy={() => handleBuy(course)} // Pass the whole course object
            isRegistered={registeredCourse && registeredCourse._id === course._id} // Compare IDs for registration
            onSwitch={() => handleSwitch(course)} // Pass the whole course object
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
