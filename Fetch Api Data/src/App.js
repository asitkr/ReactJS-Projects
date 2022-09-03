import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then(res => setData(res.data));
  }

  const showData = () => {
    getData();
  }

  return (
    <div className="App">
      <h1>Fetch Data From Api</h1>
      <Button variant="primary" onClick={showData}>Click Here To Get Data</Button>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <th>Id : </th>
            <th>Name : </th>
            <th>Email : </th>
            <th>Username : </th>
            <th>Phone : </th>
            <th>Website : </th>
          </tr>
          {
            data.map((item, key) => {
              return(
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
