import React, {useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { Section, Button, Aside } from "react-bulma-components";
import axios from 'axios';


export default function Candidates() {
    const [candidates, setCandidates] = useState([]);

    const getCandidates = () => {
		axios
			.get(
				'http://127.0.0.1:5000/users',
				{ headers: { 'Access-Control-Allow-Origin': '*' } }
			)
			.then(function(response) {
				setCandidates(response.data.user);
			});
	};
  return (
    <div>
      <Section class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Tasks</h1>
            <h2 class="subtitle">Current Candidates</h2>
          </div>
        </div>
        <Button onClick={getCandidates}>Current Candidates</Button>
      </Section>

      {candidates.map((candidate, i) => {
          return (
              <ul key={i}>
                  <li>{candidate.username}</li>
                  <li>{candidate.First_Name}</li>
                  <li>{candidate.Last_Name}</li>
                  <li>{candidate.User_Type}</li>
              </ul>
          )
      })}




    </div>
  );
}
