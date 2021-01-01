import React, { useState } from "react";
import { Section, Button, Aside, Select, Form } from "react-bulma-components";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UserSubmission( { candidates }) {
  const { register, handleSubmit, errors } = useForm();
  const [userData, setUserData] = useState([]);

  const userSubmit = (data) => {
    setUserData(data);
    console.log("user data >>>", userData);
    console.log(data);
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/register",
      data: data,
    });
  };

  const taskSubmit = (data) => {
    console.log("Task Data >>>", data);
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/task/${data.name}",
      data: data,
    });
  };

  return (
      <div>
    <div class='container'>
      <h1>User Submission</h1>
      <form onSubmit={handleSubmit(userSubmit)}>
        <input
          class='input'
          type="text"
          placeholder="Username"
          name="username"
          ref={register}
        />
        <input
          class='input'
          type="text"
          placeholder="First Name"
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
        <input
          class='input'
          type="password"
          placeholder="Password"
          name="password"
          ref={register}
        />
        <select
          class='select'
          type="text"
          placeholder="user_type"
          name="user_type"
          ref={register}
        >
          <option value='admin'>Admin</option>
          <option value='candidate'>Candidate</option>
          <option value='leadership'>Leadership</option>
        </select>
        <button class="button is-success" type="submit" >Submit</button>
      </form>
    </div>
      </div>

  );
}

// .post("http://127.0.0.1:5000/register", {
//   headers: { "Access-Control-Allow-Origin": "*" },
// })
