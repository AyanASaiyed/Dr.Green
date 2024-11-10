import Home from "./Home.jsx";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

function App() {

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setFetching(false);
        return;
      } else {
        setUser(null);
        setFetching(false);
      }
    });
    return () => unsub();
  }, []);

  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login user={user} />} />
          <Route path="/signup" element={<SignUp user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
