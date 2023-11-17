import React, { Component } from 'react';

class DataList1 extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Data List</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
             {item.id} - {item.name} - {item.department}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataList1;
