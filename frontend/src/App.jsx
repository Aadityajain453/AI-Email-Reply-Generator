import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import Login from "./mycomponents/Login";
import EmailForm from "./mycomponents/EmailForm";
import SavedReplies from "./mycomponents/SavedReplies";

import { useState } from "react";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}


// Logout Button Component
function LogoutButton() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <button
      className="btn btn-danger"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}


function App() {

  const [refreshReplies, setRefreshReplies] = useState(false);

  return (
    <>
      <BrowserRouter>

        <Routes>

          {/* Login Page */}
          <Route
            path="/login"
            element={<Login />}
          />


          {/* Email Generator Page */}
          <Route
            path="/email-generator"
            element={
              <ProtectedRoute>

                <>

                  <div className="container mt-4 text-end">

                    <LogoutButton />

                  </div>


                  <EmailForm
                    onReplySaved={() =>
                      setRefreshReplies(!refreshReplies)
                    }
                  />


                  <SavedReplies
                    refreshReplies={refreshReplies}
                  />

                </>

              </ProtectedRoute>
            }
          />


          {/* Default Route */}
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />

        </Routes>

      </BrowserRouter>


      <ToastContainer />

    </>
  );
}

export default App;