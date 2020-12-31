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
      <Section>
        <form onSubmit={handleSubmit(taskSubmit)}>
          <input type="text" placeholder="Name" name="name" ref={register} />
          <input
            type="text"
            placeholder="description"
            name="description"
            ref={register}
          />
          <input type="submit" />
        </form>
      </Section>
    </div>
  );
}
