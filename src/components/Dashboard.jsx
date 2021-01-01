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

  const [reportModal, setReportModal] = useState("modal");
  const [taskModal, setTaskModal] = useState("modal");
  const [userModal, setUserModal] = useState("modal");
  const [notActive, setNotActive] = useState("modal");

  const reportButton = () => {
    setReportModal("modal is-active");
  };
  const closeReportButton = () => {
    setReportModal("modal");
  };
  const taskButton = () => {
    setTaskModal("modal is-active");
  };
  const closeTaskButton = () => {
    setTaskModal("modal");
  };
  const userButton = () => {
    setUserModal("modal is-active");
  };
  const closeUserButton = () => {
    setUserModal("modal");
  };

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
    getTasks();

    const getCandidates = () => {
      axios
        .get("http://127.0.0.1:5000/users", {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then(function (response) {
          setCandidates(response.data.user);
        });
    };
    getCandidates();

    const getAdmins = () => {
      axios
        .get("http://127.0.0.1:5000/users", {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then(function (response) {
          setAdmins(response.data.user);
        });
    };
    getAdmins();

    const getReports = () => {
      axios
        .get("http://127.0.0.1:5000/reports", {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then(function (response) {
          setReports(response.data.reports);
        });
    };
    getReports();
  }, []);

  return (
    <div>
      <Section class="hero is-dark is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">cPanel Associate Developer Tracker</h1>
            <div class="select">
              <select>
                <option>Select Admin</option>
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
        </div>
        <nav class="navbar is-light">
          <div class="container ml-6">
            <button class="button is-dark" onClick={userButton}>
              Add User
            </button>
            <button class="button is-dark" onClick={taskButton}>
              Add Task
            </button>
            <button
              class="button is-dark"
              id="reportButton"
              onClick={reportButton}
            >
              Add Report
            </button>
            <div className={reportModal}>
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Report Submission</p>
                  <button
                    onClick={closeReportButton}
                    class="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <ReportSubmission candidates={candidates}/>
                </section>
                <footer class="modal-card-foot"></footer>
              </div>
            </div>
            <div className={taskModal}>
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Task Submission</p>
                  <button
                    onClick={closeTaskButton}
                    class="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <TaskSubmission candidates={candidates}/>
                </section>
                <footer class="modal-card-foot"></footer>
              </div>
            </div>
            <div className={userModal}>
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">User Submission</p>
                  <button
                    onClick={closeUserButton}
                    class="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <UserSubmission candidates={candidates}/>
                </section>
                <footer class="modal-card-foot"></footer>
              </div>
            </div>
          </div>
        </nav>
      </Section>

      <div class="columns">
        <div class="column">
          <table class="table is-striped">
            <thead>
              <tr>
                <th>Candidates</th>
              </tr>
              <tr>
                <th>Id</th>
                <th>First</th>
                <th>Last</th>
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
                <th>Tasks</th>
              </tr>
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

        <div class="column">
          <table class="table is-striped">
            <thead>
              <tr>
                <th>Reports</th>
              </tr>
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
    </div>
  );
}
