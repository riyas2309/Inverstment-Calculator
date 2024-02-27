import React, { useState } from "react";

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
    <div>
      {data.map((list) => {
        <>
          <p>{list.year}</p>
          <p>{list.totsav}</p>
          <p>{list.totint}</p>
          <p>{list.invcap}</p>
          <p>{list.intyr}</p>
        </>;
      })}
    </div>
  );
}

export default ListData;
