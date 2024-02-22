import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <h1>User Dashboard</h1>
      <div className="tab-user">
        <nav>
          <ul className="user-nav">
            <li>
               <Link to="/">Add User Form</Link>
            </li>
            <li>
              <Link to="/userlist">User List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<AddUserForm addUser={addUser} />}/>
        <Route path="/userlist" element={<UserList users={users} />}/>
      </Routes>
    </Router>
  );
};

export default App;
