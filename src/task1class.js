import React, { Component } from 'react';

class DataList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Data List</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataList;
