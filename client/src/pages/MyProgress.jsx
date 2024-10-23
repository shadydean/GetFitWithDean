import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyProgress() {
  const [tasks, setTasks] = useState({});
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
        console.log(response);

        // Set tasks with the structure received from the backend
        setTasks(response.data.tasks); // Assuming response.data.tasks contains the correct structure
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

  const weeks = Object.keys(tasks); // Get week keys from tasks

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold mb-10 mt-10'>Your Progress</h1>
        <div className='mr-3 ml-3'>
          <ul className='space-y-4'>
            {weeks.map((week) => (
              <li key={week} className='border rounded-lg p-4 bg-white shadow'>
                <div 
                  className='flex justify-between cursor-pointer'
                  onClick={() => toggleWeek(week)}
                >
                  <h2 className='text-lg font-semibold'>Week {week}</h2>
                  <span className='text-gray-500'>{openWeek === week ? '--' : '+'}</span>
                </div>
                {openWeek === week && (
                  <ul className='mt-2 pl-4'>
                    {tasks[week] && tasks[week].length > 0 ? (
                      tasks[week].map((task) => (
                        <li key={task._id} className='text-gray-700'>
                          {task.description} {/* Display task description */}
                        </li>
                      ))
                    ) : (
                      <li className='text-gray-500'>No tasks available.</li>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyProgress;
