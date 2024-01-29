import React from "react";

import pdata from "../data/pdata.json";
const Table = () => {
  return (
    <>
      <h1 lassName="chart-heading">Table View of Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Students</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {pdata.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.student}</td>
              <td>{item.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
