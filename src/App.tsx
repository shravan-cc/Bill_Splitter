/* eslint-disable @typescript-eslint/no-explicit-any */
//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";

import "./App.css";
import "./index.css";

import { FinalForm } from "./components/FinalForm/FinalForm";

function App() {
  return (
    <>
      <h1 className="text-[#1e5e54] font-poppins p-auto m-0 text-2xl">
        SPLI<br></br>TTER
      </h1>

      <div className="bg-white p-8 rounded-[24px] w-full max-w-[1280px] sm-max:rounded-b-[0]">
        <FinalForm />
      </div>
    </>
  );
}

export default App;
