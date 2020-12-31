import React, { useState } from "react";
import { Section, Button, Aside, Select, Form } from "react-bulma-components";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UserSubmission() {
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
              <Section>
      <form onSubmit={handleSubmit(userSubmit)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register}
        />
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          ref={register}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          ref={register}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register}
        />
        <input
          type="text"
          placeholder="user_type"
          name="user_type"
          ref={register}
        />
        <input type="submit" />
      </form>
    </Section>
      </div>

  );
}

// .post("http://127.0.0.1:5000/register", {
//   headers: { "Access-Control-Allow-Origin": "*" },
// })
