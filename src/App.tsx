/* eslint-disable @typescript-eslint/no-explicit-any */
//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import {
  CounterComponent,
  HeadingComponent,
} from "./components/CounterComponents/CounterComponent";
import styles from "./components/CounterComponent.module.css";
//import { Logo } from "./components/Logo";
import { Widget } from "./components/Widgets/Widget";
import {
  faInfoCircle,
  faTrash,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { NumberInput } from "./components/NumberInput/NumberInput";

function App() {
  //const [count, setCount] = useState(0);
  /*const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const sum = count1 + count2;
  const product = count1 * count2;

  const handleInputChange1 = (e: any) => {
    const value = e.target.value;
    if (value === "") {
      setCount1(value);
    } else {
      setCount1(Number(value));
    }
  };
  const handleInputChange2 = (e: any) => {
    const value = e.target.value;
    if (value === "") {
      setCount2(value);
    } else {
      setCount2(Number(value));
    }
  }; */
  return (
    /*<>
      <div>
        <Logo image={viteLogo} url="https://vitejs.dev"></Logo>
        <Logo
          image={reactLogo}
          url="https://react.dev"
          customClass="react"
        ></Logo>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/
    /*<div className={styles.container}>
      <HeadingComponent sum={sum} product={product} />
      <div className={styles.counterWrapper}>
        <CounterComponent
          increment={() => setCount1((count1) => count1 + 1)}
          decrement={() => setCount1((count1) => count1 - 1)}
          count={count1}
          handleInputChange={handleInputChange1}
        />
        <CounterComponent
          increment={() => setCount2((count2) => count2 + 1)}
          decrement={() => setCount2((count2) => count2 - 1)}
          count={count2}
          handleInputChange={handleInputChange2}
        />
        <Widget color="blue" icon={faInfoCircle} heading="Yes" desc="yesno" />
      </div>
    </div>*/
    <>
      <NumberInput value={0} typeOfIcon="dollar" label="Bill" />
    </>
  );
}

export default App;
