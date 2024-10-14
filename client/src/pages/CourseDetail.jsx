import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CourseDetails() {
  const [courseType, setCourseType] = useState(null);
  const [courseData, setCourseData] = useState(null);

  // Fetch user info on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await axios.get('/api/user');  // Fetch user info from backend
      setCourseType(response.data.courseType);        // Store the course type (Beginner/Intermediate/Advanced)
    };
    fetchUserInfo();
  }, []);

  // Fetch the relevant course details based on courseType
  useEffect(() => {
    if (courseType) {
      const fetchCourseData = async () => {
        try {
          const response = await axios.get(`/api/courses/${courseType}`);
          setCourseData(response.data);   // Store the course details
        } catch (err) {
          console.error('Error fetching course details or access denied');
        }
      };
      fetchCourseData();
    }
  }, [courseType]);

  return (
    <div className="course-details">
      {courseData ? (
        <div>
          <h1 className="text-3xl font-semibold mb-4">{courseData.name} Course</h1>
          <p className="mb-4">{courseData.description}</p>
          
          <ul>
            {courseData.tasks.map((task, index) => (
              <li key={index} className="mb-2">
                {task.name} - {task.status ? 'Completed' : 'Pending'}
              </li>
            ))}
          </ul>

        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
}

export default CourseDetails;
