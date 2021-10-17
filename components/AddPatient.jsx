import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import options from "../options.json";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export const AddPatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [symptoms, setSymptoms] = useState(null);

  let s = [];

  const getSymptoms = () => {
    for (let i = 0; i < symptoms.length; i++) {
      s.push(symptoms[i].value);
    }
    return s;
  };

  const run = () => {
    axios.get(`https://healthservice.priaid.ch/diagnosis?symptoms=[${getSymptoms()}]&gender=male&year_of_birth=2007&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNjaWRyb2lkZ2FtZXNAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI3MTQxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0xMC0xNSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTYzNDQ2ODM0NywibmJmIjoxNjM0NDYxMTQ3fQ.ahDbXacdyeOQF7brQiPqxTxWrSMXoCibuc-FGYP-yn0&format=json&language=en-gb`)
    .then(function (response) {
      const data = response;
      let aa = [];
      for (let j = 0; j < data.length; j++) {
        alert(data[j].Issue.name);
      };
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(getSymptoms());
    run()
  };

  return (
    <>
      <Toaster />
      <h1 className="text-center text-4xl text-gray font-semibold m-2">
        Actual Patient: Juan Almanza
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center align-center mr-16 ml-16"
      >
        <h2 className="text-center text-4xl text-gray font-semibold m-2">
          Add the checkup logs
        </h2>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="date"
          placeholder="date"
          {...register("firstName", { required: true })}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="notes"
          {...register("lastName", { required: true })}
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="age"
          {...register("age", { required: true, max: 150, min: 1 })}
        />
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
          {...register("gender", { required: true })}
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <Select
          isMulti
          name="symptoms"
          options={options}
          className="basic-multi-select mb-2"
          classNamePrefix="select"
          onChange={setSymptoms}
        />
        <input
          className="w-40 p-2 rounded bg-deep-purple-700 text-white m-auto"
          value="Submit"
          type="submit"
        />
      </form>
    </>
  );
};
