import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const UserData = () => {
    const [userData, setUserData] = useState({
      name: "",
      email: ""
    });
  
    useEffect(() => {
      const fetchUserData = async () => {
        const response = await axios.get("https://randomuser.me/api");
        const { name, email } = response.data.results[0];
        setUserData({ name: `${name.first} ${name.last}`, email });
        localStorage.setItem("userData", JSON.stringify(userData));
      };
      fetchUserData();
    }, []);
  
    const handleRefreshClick = async () => {
      const response = await axios.get("https://randomuser.me/api");
      const { name, email } = response.data.results[0];
      setUserData({ name: `${name.first} ${name.last}`, email });
      localStorage.setItem("userData", JSON.stringify(userData));
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto my-5">
          <div className="card">
            <div className="card-body">
            <p className="card-text fw-bold">Name</p>
        <p className="card-text">{userData.name}</p>
        <p className="card-text fw-bold">Email</p>
        <p className="card-text">{userData.email}</p>
              <button className="btn btn-primary" onClick={handleRefreshClick}>Refresh</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
