import React from "react";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold my-4 text-center">Skills</h1>
      <div className="flex flex-col justify-items-center">
        <div className="flex flex-row justify-center">
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            Python
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            TS/JS
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            C#
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            CSS/HTML
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            React
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            Node.js
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            .NET
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            Docker
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            SQL
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            GraphQL
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            NoSQL
          </button>
          <button className="bg-slate-700 rounded m-1 px-2 py-1 hover:bg-cyan-500 hover:scale-105 ease-out duration-200">
            Azure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
