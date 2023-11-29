import React, { useState } from "react";

const LoginForm = ({ handleLoginForm }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const authEmail = "gimnazijakakanj@edu.ba"
  const authPassword = "gimnazijakakanj@edu.ba";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email == authEmail && password == authPassword) {
      setModalIsOpen(false)
      handleLoginForm()
      return
    } else {
      alert("Pogrešan mail ili šifra");
    }

    setEmail("");
    setPassword("");

  };

  return (
    <div className="flex justify-center items-center h-screen font-link">
      {modalIsOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">Prijava</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-1">Email:</label>
                <input
                  className="border rounded py-1 px-2 w-full"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Unesi email adresu"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Šifra:</label>
                <input
                  className="border rounded py-1 px-2 w-full"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Unesi šifru"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                type="submit"
              >
                Prijava
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
