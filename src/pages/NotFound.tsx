import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-red-800">404</h1>
        <p className="mb-4 text-xl text-gray-600 font-bold">OOPS! PAGE NOT FOUND</p>
        <p className="mb-6 text-l text-red-800">We’re currently working on adding more pages to our website.
          <br/>We apologize for the inconvenience and appreciate your patience in the meantime.</p>
        <a href="/" className="text-black underline hover:text-red-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
