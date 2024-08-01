/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

interface personId {
  id: number;
}

interface Person {
  name: string;
}

async function fetchPerson(id: number) {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const jsonObj = await response.json();
  return jsonObj;
}

const delay = (time: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

export function SwapPerson({ id }: personId) {
  const [status, setStatus] = useState<"loading" | "success" | "Failed">(
    "loading"
  );

  const [personInfo, setPerson] = useState<Person>({ name: "" });

  useEffect(() => {
    setStatus("loading");
    async function fetchPersonId() {
      try {
        await delay(3000);
        const person = await fetchPerson(id);
        setPerson(person);
        setStatus("success");
      } catch (e: any) {
        console.error(e);
        setStatus("Failed");
      }
    }
    fetchPersonId();
  }, [id]);

  let statusValue;
  switch (status) {
    case "loading":
      statusValue = <div>Loading...</div>;
      break;
    case "success":
      statusValue = <div>Success</div>;
      break;
    case "Failed":
      statusValue = <div>Failed</div>;
      break;
  }

  return (
    <div>
      {personInfo.name} {statusValue}
    </div>
  );
}
