import React, { useState } from "react";
import { Section, Button, Aside, Select, Form } from "react-bulma-components";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function TaskSubmission() {
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
      <h1>Report Submission</h1>
        <form class='column' onSubmit={handleSubmit(reportSubmit)}>
          <input
          class='input is-primary'
          type="text" 
          placeholder="Name" 
          name="name" 
          ref={register} 
          />
          <input
            class='input is-primary'
            type="text"
            placeholder="Benchmark"
            name="benchmark"
            ref={register}
          />
          <input
            class='input is-primary'
            type="text"
            placeholder="Content"
            name="content"
            ref={register}
          />
          <input
            class='input is-primary'
            type="text"
            placeholder="Status"
            name="status"
            ref={register}
          />
          <button class="button is-success" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}
