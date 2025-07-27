import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!username || !email || !password) {
      alert("all the fields are required")
      return;
    }
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:3000/api/v1/user/register", {
        username,
        email,
        password
      })
      console.log("successfully registered: ", response )
      setLoading(false)
    } catch (error) {
      console.log("registration error: ", error)
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-6 border border-gray-300 p-6 rounded-lg w-96 shadow-lg">
        <div className="font-medium text-xl w-full">Register Page</div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3 focus:ring-gray-300 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-medium">Email</label>
            <input
              type="text"
              placeholder="deepak@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3 focus:ring-gray-300 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3 focus:ring-gray-300 transition-all duration-300 ease-in-out"
            />
          </div>
          <Button title={loading ? "Loading..." : "Register"} onclick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
