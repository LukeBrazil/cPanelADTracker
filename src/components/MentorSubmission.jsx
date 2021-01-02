import React, { useState } from "react";
import { Section, Button, Aside, Select, Form } from "react-bulma-components";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function TaskSubmission() {
  const { register, handleSubmit, errors } = useForm();

  const mentorSubmit = (data) => {
    console.log("Report Data >>>", data);
    axios({
      method: "post",
      url: `http://127.0.0.1:5000/mentorregister`,
      data: data,
    });
  };

  return (
    <div>
      <div class='container'>
        <form class='column' onSubmit={handleSubmit(mentorSubmit)}>
          <input
          class='input'
          type="text" 
          placeholder="UserName" 
          name="username" 
          ref={register} 
          />
          <input
            class='input'
            type="text"
            placeholder="Password"
            name="password"
            ref={register}
          />
          <input
            class='input'
            type="text"
            placeholder="First name"
            name="first_name"
            ref={register}
          />
          <input
            class='input'
            type="text"
            placeholder="Last Name"
            name="last_name"
            ref={register}
          />
                <button class="button is-dark" type="submit" style={{color: '#FF6C2C', margin: '5px'}}>Submit</button>
        </form>
      </div>
    </div>
  );
}
