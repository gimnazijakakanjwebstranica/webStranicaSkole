import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import CreateArticleForm from "../components/CreateArticleForm";

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
          Admin Panel
          <CreateArticleForm />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
