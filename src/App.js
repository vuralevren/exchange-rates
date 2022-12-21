import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stats from "./components/stats";

function App() {
  const [minutesLeft, setMinutesLeft] = useState(
    5 - (new Date().getMinutes() % 5)
  );

  useEffect(() => {
    setInterval(timer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const timer = () => {
    setMinutesLeft(5 - (new Date().getMinutes() % 5));
  };

  return (
    <div className="px-6 py-6 bg-slate-300 h-full">
      <h1 className="text-center">
        Rates are updated instantly every 5 minutes. ({minutesLeft} minutes
        left)
      </h1>

      <Stats />

      <ToastContainer
        position="top-center"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;