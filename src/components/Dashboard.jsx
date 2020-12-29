import React, {useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { Section, Button, Aside } from "react-bulma-components";
import axios from 'axios';


export default function Dashboard() {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
		axios
			.get(
				'http://127.0.0.1:5000/tasks',
				{ headers: { 'Access-Control-Allow-Origin': '*' } }
			)
			.then(function(response) {
				setTasks(response.data.tasks);
			});
	};
  return (
    <div>
      <Section class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Tasks</h1>
            <h2 class="subtitle">Tasks for Candidates</h2>
          </div>
        </div>
        <Button onClick={getTasks}>Get Tasks</Button>
      </Section>

      {tasks.map((task, i) => {
          return (
              <ul key={i}>
                  <li>{task.name}</li>
                  <li>{task.description}</li>
              </ul>
          )
      })}




    </div>
  );
}
