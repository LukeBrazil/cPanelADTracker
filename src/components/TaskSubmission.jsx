import React, { useState } from "react";
import { Section, Button, Aside, Select, Form } from "react-bulma-components";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function TaskSubmission() {
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
      <div class='container'>
      <h1>Task Submission</h1>
        <form onSubmit={handleSubmit(taskSubmit)}>
          <input class='input is-primary' type="text" placeholder="Name" name="name" ref={register} />
          <input
            class='input is-primary'
            type="text"
            placeholder="description"
            name="description"
            ref={register}
          />
          <button onClick="window.location.reload();" class="button is-success" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}
