import { ToastContainer } from "react-toastify";
import EmailForm from "./mycomponents/EmailForm";
import SavedReplies from "./mycomponents/SavedReplies";
import { useState } from "react";

function App() {

  const [refreshReplies, setRefreshReplies] = useState(false);
  return (
    <>
      <EmailForm
        onReplySaved={() => setRefreshReplies(!refreshReplies)}
      />

      <SavedReplies refreshReplies={refreshReplies} />
      <ToastContainer />

    </>
  );
}

export default App;