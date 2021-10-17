import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import options from "../options.json"

export const AddPatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [symptoms, setSymptoms] = useState(null);
  const onSubmit = (data) => localStorage.setItem(Math.floor(Math.random() * (999 - 1)) + 1,JSON.stringify({
    "email":data.email,
    "firstName":data.firstName,
    "lastName":data.LastName,
    "age":data.age,
    "gender":data.gender,
    "symptoms":symptoms
  }));
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center align-center mr-16 ml-16"
    >
      <h1 className="text-center text-4xl text-gray font-semibold m-2">
        Add a new patient
      </h1>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
      />
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        placeholder="firstName"
        {...register("firstName", { required: true })}
      />
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        placeholder="lastName"
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
  );
};
