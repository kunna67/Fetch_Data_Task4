import React, { useEffect, useState } from "react"
import axios from "axios";
import './App.css'

const App = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios.get("https://dummyjson.com/users")
          .then((response) => setUser(response.data.users));
  }

  useEffect(()=> {
    fetchData();
  },[])

  return (
    <div>
      <h2> Task - 4 </h2>
      <ul>
      <table>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Password</th>
              <th>BirthDate</th>
              <th>Image</th>
              <th>Blood Group</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Eyecolor</th>
              <th>Haircolor</th>
              <th>Hairtype</th>
              <th>Domain</th>
              <th>IP</th>
              <th>Macaddress</th>
              <th>University</th>
              <th>EIN</th>
              <th>SSN</th>
              <th>UserAgent</th>
            </tr>
        {user.map(u=>
            <tr>
              <td>{u.id}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.age}</td>
              <td>{u.gender}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.username}</td>
              <td>{u.password}</td>
              <td>{u.birthDate}</td>
              <td>{u.image}</td>
              <td>{u.bloodGroup}</td>
              <td>{u.height}</td>
              <td>{u.weight}</td>
              <td>{u.eyeColor}</td>
              <td>{u.hair.color}</td>
              <td>{u.hair.type}</td>
              <td>{u.domain}</td>
              <td>{u.ip}</td>
              <td>{u.macAddress}</td>
              <td>{u.university}</td>
              <td>{u.ein}</td>
              <td>{u.ssn}</td>
              <td>{u.userAgent}</td>
            </tr>
        )}
        </table>

      </ul>
    </div>
  )
}

export default App;
