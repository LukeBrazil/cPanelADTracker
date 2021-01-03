import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { Section, Button, Aside, Select } from "react-bulma-components";
import axios from "axios";

import UserSubmission from "./UserSubmission";
import TaskSubmission from "./TaskSubmission";
import ReportSubmission from "./ReportSubmission";
import MentorSubmission from "./MentorSubmission";

import logo2 from "./img/logo2.svg";
import "./styles.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [reportModal, setReportModal] = useState("modal");
  const [mentorModal, setMentorModal] = useState("modal");
  const [taskModal, setTaskModal] = useState("modal");
  const [userModal, setUserModal] = useState("modal");
  const [notActive, setNotActive] = useState("modal");
  const [report, setReport] = useState([]);
  const [userReport, setUserReport] = useState("modal");

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
  const userReportButton = () => {
    setUserReport("modal is-active");
  };

  const closeUserReport = () => {
    setUserReport("modal");
    setReport([]);
  };

  const mentorButton = () => {
    setMentorModal("modal is-active");
  };

  const closeMentorButton = () => {
    setMentorModal("modal");
  };

  useEffect(() => {
    const getTasks = () => {
      axios
        .get("http://127.0.0.1:5000/tasks", {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then(function (response) {
          console.log("task data", response.data.tasks);
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
          console.log("user data", response.data.user);
          console.log("user state", candidates);
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
          console.log("report data", response.data.reports);

          setReports(response.data.reports);
        });
    };
    getReports();
  }, []);

  return (
    <div>
      <Section class="hero is-dark is-medium">
        <div class="hero-body" style={{ backgroundColor: "#151B54" }}>
          <div class="container">
            <h1 class="title" style={{ color: "#fdfff5" }}>
              <img style={{ height: "100px" }} src={logo2}></img> Associate
              Developer Tracker
            </h1>
            <div class="select">
              <select>
                <option>Select Admin</option>
                {admins.map((admin) => {
                  for (var i = 0; i < admins.length; i++) {
                    if (admin.user_type === "admin") {
                      return <option>{admin.username}</option>;
                    }
                  }
                })}
              </select>
            </div>
          </div>
        </div>
        <nav
          class="navbar is-light"
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <div
            class="container"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              margin: '5px'
            }}
          >
            <div class='container' style={{display: 'flex', justifyContent: 'center'}}>
            <button
              class="button"
              onClick={userButton}
              style={{margin: '5px'}}
            >
              Add User
            </button>
            <button
              class="button"
              onClick={taskButton}
              style={{margin: '5px'}}
            >
              Add Task
            </button>
            <button
              class="button"
              id="reportButton"
              onClick={reportButton}
              style={{margin: '5px'}}
            >
              Add Report
            </button>
            <button
              class="button"
              onClick={mentorButton}
              style={{margin: '5px'}}
            >
              Add Mentor
            </button>
            </div>
            
          </div>

          <div className={mentorModal}>
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Mentor Submission</p>
                <button
                  onClick={closeMentorButton}
                  class="delete"
                  aria-label="close"
                ></button>
              </header>
              <section class="modal-card-body">
                <MentorSubmission />
              </section>
              <footer class="modal-card-foot"></footer>
            </div>
          </div>
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
                <ReportSubmission candidates={candidates} />
              </section>
              <footer class="modal-card-foot"></footer>
            </div>
          </div>
          <div className={taskModal}>
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">
                  Task Submission
                </p>
                <button
                  onClick={closeTaskButton}
                  class="delete"
                  aria-label="close"
                ></button>
              </header>
              <section class="modal-card-body">
                <TaskSubmission candidates={candidates} />
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
                <UserSubmission candidates={candidates} />
              </section>
              <footer class="modal-card-foot"></footer>
            </div>
          </div>

          <div className={userReport}>
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Report</p>
                <button
                  onClick={closeUserReport}
                  class="delete"
                  aria-label="close"
                ></button>
              </header>
              <section class="modal-card-body">
                <table class="table is-striped">
                  <thead>
                    <tr>
                      <th>{reports.user} Reports</th>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <th>Benchmark</th>
                      <th>Content</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tfoot></tfoot>
                  <tbody>
                    {reports.map((report) => {
                      return (
                        <tr>
                          <th>{report.name}</th>
                          <th>{report.benchmark}</th>
                          <th>{report.content}</th>
                          <th>{report.status}</th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </section>
              <footer class="modal-card-foot"></footer>
            </div>
          </div>
        </nav>
      </Section>

      <div
        class="columns"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          margin: "10px",
        }}
      >
        <div class="column">
          <table class="table is-striped is-hoverable">
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
                <th>Mentor</th>
                <th>Reports</th>
              </tr>
            </thead>
            <tfoot></tfoot>
            <tbody>
              {candidates.map((candidate) => {
                for (var i = 0; i < candidates.length; i++) {
                  if (candidate.user_type === "candidate") {
                    const getReport = () => {
                      axios
                        .get(
                          `http://127.0.0.1:5000/feedback/${candidate.username}`
                        )
                        .then(function (response) {
                          setReport(response.data.reports);
                          setUserReport("modal is-active");
                        });
                    };
                    return (
                      <tr>
                        <th>{candidate.user}</th>
                        <td>{candidate.first_name}</td>
                        <td>{candidate.last_name}</td>
                        <td>{candidate.username}</td>
                        <td>{candidate.user_type}</td>
                        <td>{candidate.mentor}</td>
                        <td>
                          <button
                            class="button"
                            onClick={getReport}
                          >
                            See Reports
                          </button>
                        </td>
                      </tr>
                    );
                  }
                }
              })}
            </tbody>
          </table>
        </div>

        <div class="column">
          <table class="table is-striped is-hoverable">
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
          <table class="table is-striped is-hoverable">
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
                    <th>{report.name}</th>
                    <td>{report.benchmark}</td>
                    <td>{report.content}</td>
                    <td>{report.status}</td>
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
