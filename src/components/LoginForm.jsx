import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../backend/config";

const LoginForm = ({ handleLoginForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/admin/login`, {
        username,
        password,
      });

      const { token } = response.data;

      // Set token in state and local storage
      setToken(token);
      localStorage.setItem("token", token);

      // Handle login form visibility or any other necessary actions
      handleLoginForm();

      // Clear input fields
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");

    if (localToken) {
      // Send a request to the server to validate the token
      axios
        .post(`${BACKEND_URL}/admin/verify-token`, null,{
          headers: {
            "x-access-token": localToken,
          },
        })
        .then((res) => {
          // Assuming the server responds with a data field `verifyValid` to indicate token validity
          const { verifyValid } = res.data;

          if (verifyValid) {
            // Token is valid, perform login action
            handleLoginForm();
          } else {
            // Token is invalid or expired, perform logout action
            console.error("Token verification failed.");
            // Optionally, you can clear the token from local storage here
            localStorage.removeItem("token");
          }
        })
        .catch((error) => {
          console.error("Token verification failed:", error);
        });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen font-link">
      {modalIsOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">Prijava</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-1">Korisničko ime:</label>
                <input
                  className="border rounded py-1 px-2 w-full"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Unesi korisničko ime"
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
