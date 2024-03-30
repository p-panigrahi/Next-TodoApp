"use client";
import React, { useState } from "react";
import Display from "@/Components/Display/Display";

const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, {title,desc}]);
    console.log(mainTask);
    setTitle("");
    setDesc("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border border-black border-3 rounded m-5 text-xl px-2 py-3"
          placeholder="Enter Task(title) Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border border-black border-3 rounded m-5 text-xl px-2 py-3"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-3 py-3 font-bold text-xl">
          Add Task
        </button>
      </form>
      <hr/>
      <Display mainTask={mainTask} setMainTask={setMainTask}/>
    </>
  );
};

export default Form;
