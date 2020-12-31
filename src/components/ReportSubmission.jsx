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
      <Section>
        <form onSubmit={handleSubmit(reportSubmit)}>
          <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          ref={register} 
          />
          <input
            type="text"
            placeholder="Benchmark"
            name="benchmark"
            ref={register}
          />
          <input
            type="text"
            placeholder="Content"
            name="content"
            ref={register}
          />
          <input
            type="text"
            placeholder="Status"
            name="status"
            ref={register}
          />
          <input type="submit" />
        </form>
      </Section>
    </div>
  );
}
