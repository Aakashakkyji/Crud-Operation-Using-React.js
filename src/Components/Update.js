import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Update = () => {

const [id,setId] = useState(0);
const [name,setName] = useState("");
const [email,setEmail] = useState("");

const navigate = useNavigate();

useEffect(() => {
  
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

}, []);

const handleupdate =(e) =>{
    e.preventDefault();
    console.log("Id....", id);
    axios.put(`https://666ece08f1e1da2be521333d.mockapi.io/Crud-Operation/${id}`, 
    {
        name : name,
        email : email,
    }
    ).then(()=>{
        navigate("/read");
    });
};


  return (
    <>
    
    <h2>Update</h2>
    <form>
    <div className="mb-3">
      <label className="text">Name</label>
      <input 
      type="text"
       className="form-control" 
       value={name}
         onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input 
      type="email" className="form-control" 
      value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <button type="submit" className="btn btn-primary mx-2" 
     onClick={handleupdate}
    >
        Update
        </button>
      <Link to ="/read">
      <button className="btn btn-primary mx-2">Back</button>
      </Link>

  </form>

  </>

  )
}

export default Update
