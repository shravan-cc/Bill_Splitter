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

export function swapPerson({ id }: personId) {
  const [personInfo, setPerson] = useState<Person>({ name: "Shravan" });

  useEffect(() => {
    async function fetchPersonId() {
      const person = await fetchPerson(id);
      setPerson(person);
    }
    fetchPersonId();
  }, [id]);

  return <div>{personInfo.name}</div>;
}
