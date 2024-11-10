import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errMessage = error.message;
        console.log(errMessage);
      });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <img src="/cartoon plant doctor.png" className="h-[30vh] shadow-2xl shadow-black mb-10"></img>
      <h1 className="text-4xl font-extrabold text-center  text-black mb-4">
        Keeping Plants <span className="text-teal-600 font-serif">Green</span>!
      </h1>
      <div className="w-full p-4 mt-0 rounded-lg shadow-md bg-teal-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
        <h1 className="text-3xl font-extrabold text-center text-white">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white font-bold">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10 text-black rounded-xl px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-black rounded-xl px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline mt-2 inline-block"
          >
            Create an Account
          </Link>
          <div className="flex items-center justify-center">
            <button
              className="mt-2 hover:bg-teal-400 rounded-xl bg-white px-6 py-3 hover:text-white"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
