import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Users';
import Posts from './Posts';
import { axios } from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [listOfUSer, setListOfUSer] = useState([]);
  // const [listOfPosts, setListOfPosts] = useState([]);
  // const [listOfComments, setListOfComments] = useState([]);
  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => setListOfUSer(res.data))

  //   axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //     .then(res => setListOfPosts(res.data));

  //   axios.get(`https://jsonplaceholder.typicode.com/comments`)
  //     .then(res => setListOfComments(res.data));

  // }, [])
  return (
    <div className="App">
      <Users/>
      {/* <Posts/> */}
    </div>
  );
}

export default App;
