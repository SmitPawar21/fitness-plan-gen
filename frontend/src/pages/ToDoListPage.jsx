import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import {useAuth} from '../components/AuthContext';

export const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const {userId} = useAuth();

  const handleAddTask = async () => {
    if (inputValue.trim() !== '') {

      await fetch('http://localhost:5000/todolist',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          task: inputValue
        })
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    }
    
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (

    <div>

      <div className="filter-box"></div>

      <div className="container-todo">

        <div className="box">
          <div className="top">
            <h2>To do list</h2>
          </div>

          <div className="inputbox">
            <input
              type="text"
              placeholder="Write your task..."
              id="input-box"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <span
              className="btn"
              onClick={handleAddTask}
            >
              Add task
            </span>
          </div>

          <ul id="listcontainer">
            {tasks.map(task => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={toggleTask}
                />
                <span className='text-todo' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                <button onClick={() => deleteTask(task.id)} style={{height: '15px', width: '15px', display:'flex', justifyContent:'center', alignItems:'center', background:'red', outline:'none', border:'none'}}>
                  <X style={{width:'17px', height:'17px', color:'white', cursor:'pointer'}}/>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};