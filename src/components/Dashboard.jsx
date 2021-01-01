import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { Section, Button, Aside, Select } from "react-bulma-components";
import axios from "axios";

import UserSubmission from "./UserSubmission";
import TaskSubmission from "./TaskSubmission";
import ReportSubmission from "./ReportSubmission";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getTasks = () => {
        axios
          .get("http://127.0.0.1:5000/tasks", {
            headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then(function (response) {
            setTasks(response.data.tasks);
          });
      };
      getTasks()

      const getCandidates = () => {
        axios
          .get("http://127.0.0.1:5000/users", {
            headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then(function (response) {
            setCandidates(response.data.user);
          });
      };
      getCandidates()

      const getAdmins = () => {
        axios
          .get("http://127.0.0.1:5000/users", {
            headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then(function (response) {
            setAdmins(response.data.user);
          });
      };
      getAdmins()

      const getReports = () => {
        axios
          .get("http://127.0.0.1:5000/reports", {
            headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then(function (response) {
            setReports(response.data.reports);
          });
      };
          getReports()

    
  }, [])

  return (
    <div>
      <Section class="hero is-dark is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">cPanel Associate Developer Tracker</h1>
          </div>
        </div>
      </Section>

      <div class="container">
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

      </div>

        <div class="columns">
        <div class="column">
          <table class="table is-striped">
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
        </div>
      
      <div class="column">
        <table class="table is-striped">
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
      </div>

      <div class='column'>
      <table class="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Desrciption</th>
              <th>Content</th>
              <th>Status</th>
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            {reports.map((report) => {
              return (
                <tr>
                  <th>{report.Name}</th>
                  <td>{report.Benchmark}</td>
                  <td>{report.Content}</td>
                  <td>{report.Status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

        </div>
    
    <div class='container'>
        <div class='columns'>
            <div class='column'>
                <UserSubmission />
            </div>
            <div class='column'>
                <TaskSubmission />
            </div>
            <div class='column'>
                <ReportSubmission />
            </div>
        </div>
    </div>
    </div>
  );
}
