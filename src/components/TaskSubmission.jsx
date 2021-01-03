import React, { useState } from "react";
import { Section, Button, Aside, Select, Form } from "react-bulma-components";
import axios from "axios";
import { useForm } from "react-hook-form";

import './styles.css'

export default function TaskSubmission({ candidates }) {
  const { register, handleSubmit, errors } = useForm();

  const taskSubmit = (data) => {
    console.log("Task Data >>>", data);
    axios({
      method: "post",
      url: `http://127.0.0.1:5000/task/${data.name}`,
      data: data,
    });
  };

  return (
    <div>
      <div class="container">
        <form onSubmit={handleSubmit(taskSubmit)}>
          <input
            class="input"
            type="text"
            placeholder="Name"
            name="name"
            ref={register}
          />
          <input
            class="input"
            type="text"
            placeholder="Description"
            name="description"
            ref={register}
          />
          <select class='select'>
            <option>Choose Candidate</option>
            {candidates.map((candidate) => {
              for (var i = 0; i < candidates.length; i++) {
                if (candidate.user_type === "candidate") {
                  return (
                    <option value={candidate.user}>{candidate.username}</option>
                  );
                }
              }
            })}
          </select>

          <button
            onClick="window.location.reload();"
            class="button" type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
