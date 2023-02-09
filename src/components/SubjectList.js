import React from 'react';
import { Table } from 'react-bootstrap';
import cs2019data from '../../components/cs2019.json';

function UserList({ data }) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Major</th>
            <th>Subject</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  
  export default UserList;