// // src/components/AddTask.js

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../actions';

// const AddTask = () => {
//   const [task, setTask] = useState('');
  
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!task.trim()) return;
//     dispatch(addTask({ id: Date.now(), name: task }));
//     setTask('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add a task"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;
