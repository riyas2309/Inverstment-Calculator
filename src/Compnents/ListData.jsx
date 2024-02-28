import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function ListData() {
  const [data, setdata] = useState([
    {
      year: 1,
      totsav: 11700,
      intyr: 500,
      totint: 500,
      invcap: 11200,
    },
    {
      year: 1,
      totsav: 11700,
      intyr: 500,
      totint: 500,
      invcap: 11200,
    },
    {
      year: 1,
      totsav: 11700,
      intyr: 500,
      totint: 500,
      invcap: 11200,
    },
    {
      year: 1,
      totsav: 11700,
      intyr: 500,
      totint: 500,
      invcap: 11200,
    },
  ]);
  return (
    <>
      {data.map((datas) => (
        <div className="flex p-5 place-content-evenly w-[40rem]" key={uuidv4()}>
          <p className="ml-[-1.5rem]">{datas.year}</p>
          <p className="ml-[-1.5rem]">{datas.totsav}</p>
          <p>{datas.totint}</p>
          <p>{datas.invcap}</p>
          <p>{datas.intyr}</p>
        </div>
      ))}
    </>
  );
}

export default ListData;
