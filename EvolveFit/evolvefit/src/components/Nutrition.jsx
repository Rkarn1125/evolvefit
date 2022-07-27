import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Nutrition = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getStudent() {
      try {
        const students = await axios.get(
          `http://localhost:3333/Users/${userId}`
          
        );

        setUsers(students.data);
        console.log(users);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, []);
  return (
    <div>
      <div className="containermain">
        Nutrition
        <h1>this is Dynamic nutrition page {userId}</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="container4">
              <td>{userId}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nutrition;
