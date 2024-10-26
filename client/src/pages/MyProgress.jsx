import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyProgress() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/progress', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Course Tasks:', response.data.courseTasks);
        setTasks(response.data.courseTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-semibold mb-10 mt-10'>Your Progress</h1>
      <div className='mr-3 ml-3'>
        <ul className='space-y-4'>
          {tasks.map((weekData, index) => (
            <li key={index} className='border rounded-lg p-4 bg-white shadow'>
              <div 
                className='flex justify-between cursor-pointer'
                onClick={() => toggleWeek(weekData.week)}
              >
                <h2 className='text-lg font-semibold'>Week {weekData.week}</h2>
                <span className='text-gray-500'>{openWeek === weekData.week ? '--' : '+'}</span>
              </div>
              {openWeek === weekData.week && (
                <ul className='mt-2 pl-4'>
                  {weekData.days.map((dayData) => (
                    <li key={dayData.day} className='mb-4'>
                      <h3 className='font-medium text-md mb-2'>Day {dayData.day} - {dayData.focus} Focus</h3>
                      <ul className='pl-4'>
                        {dayData.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className='text-gray-700 mb-1'>
                            <span className='font-semibold'>{task.name}:</span> {task.description} <span className='text-sm text-gray-500'>({task.points} points)</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProgress;
