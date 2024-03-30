import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import './Taskinput.css'
const TaskInput = ({ initialListName }) => {
  const [task, setTask] = useState('');
  const [listName, setListName] = useState(initialListName || ''); // Initialize list name from prop

  const dispatch = useDispatch();

  // Save list name to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('listName', listName);
  }, [listName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask({ id: Date.now(), name: task }));
    setTask('');
  };

  return (
    <div className='container'>
    <h1>Todo List</h1>
    <input
      type="text"
      value={listName}
      onChange={(e) => setListName(e.target.value)}
      placeholder="Enter the list name / Date to your Todo List"
      className='input-list-name'
    />
    <form onSubmit={handleSubmit}  className='form-div'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className='input-task'
        
      />
      <button type="submit" className='add-task-button'>Add<br></br>Task</button>
    </form>
  </div>
  
  );
};

export default TaskInput;
