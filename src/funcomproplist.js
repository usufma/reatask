import React from 'react';

const ListOfData = ({ data }) => {
  return (
    <div>
      <h1>List of Departments</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default ListOfData;
