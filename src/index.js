import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { loadTasks } from './actions';
import './index.css'
// Load tasks and list name from local storage
const persistedTasks = localStorage.getItem('tasks');
const persistedListName = localStorage.getItem('listName');

const initialState = {
  tasks: persistedTasks ? JSON.parse(persistedTasks) : [],
  listName: persistedListName || ''
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
});

// Dispatch action to load tasks from local storage
store.dispatch(loadTasks(initialState.tasks));

// Subscribe to store changes to save tasks and list name to local storage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
  localStorage.setItem('listName', state.listName);
});

ReactDOM.render(
  <Provider store={store} >
    <TaskInput initialListName={persistedListName} />
    <TaskList />
  </Provider>,
  document.getElementById('root')
);
