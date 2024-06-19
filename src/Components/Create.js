import React, { useState } from 'react';
import axios from 'axios';  
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header =  {"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();  // Prevent default form submission
    axios.post(
      'https://666ece08f1e1da2be521333d.mockapi.io/Crud-Operation',
      {
        name: name,
        email: email,
        header,
    
      })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("There was an error!", error);
    })
   
    .then(()=>{
        history("/read");
    })
  };

  return (
    <>

    <div className="d-flex justify-content-between m-2">
      <h2>Create</h2>
      <Link to ="/read">
      <button className='btn btn-primary'>Show Data</button>
      </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="text">Name</label>
          <input type="text" className="form-control" 
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default Create;
