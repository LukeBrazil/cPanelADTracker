# cPanel Assoiciate Developer Tracker

This project was authored by Luke Brazil and Lee Arnold.

## Technologies:

This application used a React frontend and a Flask Backend.

## What it does:

This application is used to track the progress of tasks given to a candidate of cPanel

## Code Snippets

1) Fetch tasks from Python Flask Api Server

```
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

```

2) Map Candidates into a table.

```
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

```

## Screenshots

[![cPanel1.jpg](https://i.postimg.cc/BZ76WPHg/cPanel1.jpg)](https://postimg.cc/py8xzT0h)

[![cPanel2.jpg](https://i.postimg.cc/R0mC17xM/cPanel2.jpg)](https://postimg.cc/w1WdgsBP)