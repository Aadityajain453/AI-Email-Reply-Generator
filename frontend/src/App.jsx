import { ToastContainer } from "react-toastify";
import EmailForm from "./mycomponents/EmailForm";
import SavedReplies from "./mycomponents/SavedReplies";
import Login from "./mycomponents/Login";
import { useState } from "react";

function App() {

  const [refreshReplies, setRefreshReplies] = useState(false);

  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <>
          <EmailForm
            onReplySaved={() => setRefreshReplies(!refreshReplies)}
          />

          <SavedReplies refreshReplies={refreshReplies} />
        </>
      )}

      <ToastContainer />
    </>
  );
}

export default App;