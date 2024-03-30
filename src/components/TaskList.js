// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import the required icon
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div className='list-container'>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''} >
            <span onClick={() => handleToggle(task.id)} className='task-name'>
              {task.completed ? '✔️' : '◻️'} {task.name}
            </span>
            <button onClick={() => handleDelete(task.id)} className='delete-btn'>
              <FontAwesomeIcon icon={faTrashAlt} /> {/* Use FontAwesomeIcon with the specified icon */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
