import React, {useState, useEffect} from 'react';
import axios from 'axios';



function App() {

  const apiUrl = 'http://127.0.0.1:5000/tasks';

  const [tasks, setTasks ] = useState([])
  const [users, setUsers ] = useState([])

	const getTasks = () => {
		axios
    .get('http://127.0.0.1:5000/tasks', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
			.then(function(response) {
				setTasks(response.data.tasks);
			});
  };
  
	const getUsers = () => {
		axios
    .get('http://127.0.0.1:5000/users', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
			.then(function(response) {
				setUsers(response.data.user);
			});
  };

  return (
    <div>

    <button onClick={getTasks}>Get Tasks</button>
    <button onClick={getUsers}>Get Users</button>

    {tasks.map((task) => {
      return (
        <div>
          <h1>{task.name}</h1>
          <h1>{task.description}</h1>
        </div>
        
      )
    })}

    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1 key={i}>{user.username}</h1>
          <h1 key={i}>{user.First_name}</h1>
          <h1 key={i}>{user.Last_Name}</h1>
          <h1 key={i}>{user.User_Type}</h1>
        </div>
      )
    })}

    </div>
   
  )
}

export default App;
