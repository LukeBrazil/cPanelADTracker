import React, { useState } from "react";
import { Section, Button, Aside, Select, Form } from "react-bulma-components";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function TaskSubmission( { candidates }) {
  const { register, handleSubmit, errors } = useForm();

  const reportSubmit = (data) => {
    console.log("Report Data >>>", data);
    axios({
      method: "post",
      url: `http://127.0.0.1:5000/report/${data.name}`,
      data: data,
    });
  };

  return (
    <div>
      <div class='container'>
        <form class='column' onSubmit={handleSubmit(reportSubmit)}>
          <input
          class='input'
          type="text" 
          placeholder="Name" 
          name="name" 
          ref={register} 
          />
          <input
            class='input'
            type="text"
            placeholder="Benchmark"
            name="benchmark"
            ref={register}
          />
          <input
            class='input'
            type="text"
            placeholder="Content"
            name="content"
            ref={register}
          />
          <input
            class='input'
            type="text"
            placeholder="Status"
            name="status"
            ref={register}
          />
          <select class='select' 
            name='username'
            ref={register}
          >
              <option>Choose Candidate</option>
            {candidates.map((candidate) => {
                for (var i = 0; i < candidates.length; i++) {
                    if (candidate.User_Type === "candidate") {
                        return (
                            <option value={candidate.username}>{candidate.username}</option>
                            )
                        }
                    }
                })}
          </select>
                <button class="button is-success" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}
