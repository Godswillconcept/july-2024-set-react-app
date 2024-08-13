import React, { useContext } from "react";
import { UsersContext } from "./UserForm";

function UserTable() {
  const users = useContext(UsersContext);
  users.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th>S/n</th>
            <th>Full name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, email, phone }, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          ))}
       
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
