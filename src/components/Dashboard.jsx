import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { Section, Button, Aside, Select } from "react-bulma-components";
import axios from "axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [admins, setAdmins] = useState([]);

  const getTasks = () => {
    axios
      .get("http://127.0.0.1:5000/tasks", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (response) {
        setTasks(response.data.tasks);
      });
  };

  const getCandidates = () => {
    axios
      .get("http://127.0.0.1:5000/users", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (response) {
        setCandidates(response.data.user);
      });
  };

  const getAdmins = () => {
    axios
      .get("http://127.0.0.1:5000/users", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (response) {
        setAdmins(response.data.user);
      });
  };

  return (
    <div>
      <Section class="hero is-dark is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Admin Overview</h1>
          </div>
        </div>
      </Section>

      <Section>
        <div class="select">
          <select>
            {admins.map((admin) => {
              for (var i = 0; i < admins.length; i++) {
                if (admin.User_Type === "admin") {
                  return <option>{admin.username}</option>;
                }
              }
            })}
          </select>
        </div>

        <Button onClick={getCandidates}>Show Candidates</Button>
        <Button onClick={getAdmins}>Admin</Button>
        <Button onClick={getTasks}>Tasks</Button>
      </Section>



      <Section>
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>UserName</th>
              <th>Position</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            {candidates.map((candidate) => {
              for (var i = 0; i < candidates.length; i++) {
                if (candidate.User_Type === "candidate") {
                  return (
                    <tr>
                      <th>{candidate.User}</th>
                      <td>{candidate.First_Name}</td>
                      <td>{candidate.Last_Name}</td>
                      <td>{candidate.username}</td>
                      <td>{candidate.User_Type}</td>
                    </tr>
                  );
                }
              }
            })}
          </tbody>
        </table>
        <Section>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Desrciption</th>
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            {tasks.map((task) => {
                  return (
                    <tr>
                      <th>{task.name}</th>
                      <td>{task.description}</td>
                    </tr>
                  );
            })}
          </tbody>
        </table>
      </Section>
      </Section>

      
    </div>
  );
}
