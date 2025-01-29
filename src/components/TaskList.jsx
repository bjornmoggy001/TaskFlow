import React from 'react';
import {tasks as initialTasks} from '../data/tasks';
import { useState } from 'react';

const Tasklist = () => {
  const lineLength = 133;
  const underline = '_'.repeat(lineLength);

  const [tasks, setTasks] = useState(initialTasks);

  const updateStatus = (id, newStatus) =>{
    setTasks((prevTasks) =>
      prevTasks.map((task) => 
        task.id === id ? {...task, status: newStatus} : task
      ));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "ToDo":
        return "bg-red-500 text-white";
      case "In Progress":
        return "bg-yellow-300 text-gray-950";
      case "Completed":
        return "bg-green-600 text-white";
      default:
        return "bg-white text-black";
    }
  };
  


  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mt-5 ml-20">All Tasks List</h1>
      <p className="underline">{underline}</p>
      <div className='flex-row '>
        <ul className='flex justify-between px-15 text-gray-600'>
          <li>Name</li>
          <li className='ml-28'>Members</li>
          <li className='mr-10 '>Status</li>
          <li>Completion date</li>
        </ul>
        {tasks.map((task) =>(
          <div 
            key={task.id}
            className='flex justify-between px-10 items-center bg-blue-400 p-2  rounded-2xl ml-6 mr-6 shadow-md mt-2'
            >
            <p className='font-bold text-gray-950'>
              {task.name.length > 25 ? task.name.substring(0, 25) + '...': task.name}
            </p>
            <p className='text-gray-950'>{task.members}</p>
            <select
            className={`px-10 font-bold py-2 rounded-lg text-md w-40 items-center ${getStatusStyle(task.status)}`}
            value={task.status}
            onChange={(e) => updateStatus(task.id, e.target.value)}
          >
            <option value="ToDo">ToDo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <p className='mr-10 text-gray-950'>{task.date}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Tasklist
