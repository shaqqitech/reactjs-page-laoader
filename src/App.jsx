import { useState, useEffect } from "react";
import PageLoader from "./components/PageLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading for 3 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gray-800">
      {loading ? (
        <PageLoader />
      ) : (
        <h1 className="text-4xl text-center pt-16 font-semibold text-white">
          Welcome to my Website
        </h1>
      )}
    </div>
  );
};

export default App;
