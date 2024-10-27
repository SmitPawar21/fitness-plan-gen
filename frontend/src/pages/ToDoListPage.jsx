import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
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
                onChange={() => toggleTask(task.id)}
              />
              <span className='text-todo' style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>
                <X />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};