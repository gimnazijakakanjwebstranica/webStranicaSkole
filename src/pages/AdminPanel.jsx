import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import AdminNavBar from "../components/AdminNavBar";


const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginForm = () => {
    setIsLoggedIn(true);
  };
  

  return (
    <div className="font-link">
      {!isLoggedIn ? (
        <LoginForm handleLoginForm={handleLoginForm} />
      ) : (
        <div>
          <AdminNavBar />
          Admin Panel
          
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
