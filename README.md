ToDo Application
This is a simple Task Manager application built using React and Redux. It allows users to manage their tasks by adding, deleting, and toggling task completion status. The application also enables users to specify a list name for better organization.

Features
Add tasks: Users can add new tasks by entering task names into the input field and clicking the "Add Task" button.
Delete tasks: Users can delete tasks by clicking the "Delete" button next to each task.
Toggle task completion: Users can mark tasks as completed or incomplete by clicking on the task name. Completed tasks are marked with a checkmark icon.
Specify list name: Users can enter a list name to categorize their tasks. The list name persists across page reloads.

Getting Started
To run this application locally, follow these steps:

1)Clone this repository to your local machine.
2)Navigate to the project directory in your terminal.
3)Install dependencies by running npm install.
4)Start the development server by running npm start.
5)Open your web browser and visit http://localhost:3000 to view the application.

Technologies Used->
React: A JavaScript library for building user interfaces.
Redux: A predictable state container for managing application state.
React-Redux: Official React bindings for Redux.
localStorage: HTML5 Web Storage API used for persisting tasks and list name locally in the browser.

Folder Structure ->

todo-app/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── actions/
  │   │   └── index.js
  │   ├── components/
  │   │   ├── TaskInput.js
  │   │   ├── TaskList.js
  │   │   
  │   ├── reducers/
  │   │   ├── index.js
  │   │   
  │   ├── App.js
  │   └── index.js
  ├── package.json
  └── README.md
  
Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.