import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [activePlan, setActivePlan] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetching the active plan
        const token = localStorage.getItem('token');  
        const planResponse = await axios.get('http://localhost:5000/api/dashboard/plan',{
          headers: { Authorization: `Bearer ${token}` },
        });
        setActivePlan(planResponse.data.plan);

        // Fetching today's tasks based on the active plan
        const tasksResponse = await axios.get('http://localhost:5000/api/dashboard/tasks',{
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(tasksResponse)
        setTasks(tasksResponse.data.currentTasks.tasks);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mt-10 mb-4 text-center">Dashboard</h1>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2">Active Plan</h2>
        <p className="text-gray-600">{activePlan.name}</p>
        <p className="text-gray-500">{activePlan.description}</p>
      </div>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Goals for Today</h2>
        <ul className="space-y-2">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li key={task._id} className="text-gray-700">
                {task.name}
                <>  :  </> 
                {task.description}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No tasks for today.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
