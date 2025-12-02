import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import heroBg from "../assets/hero-bg.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div 
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: 'blur(12px)',
          transform: 'scale(1.1)'
        }}
      />
      
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          className="mb-4 text-9xl font-bold text-red-600 drop-shadow-2xl"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 900 }}
        >
          404
        </h1>
        <p 
          className="mb-4 text-2xl text-white font-bold drop-shadow-lg"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}
        >
          OOPS! PAGE NOT FOUND
        </p>
        <p 
          className="mb-6 text-lg text-white/70 drop-shadow-md mx-auto"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
        >
          We're currently working on adding more pages to our website.
          <br/>
          We apologize for the inconvenience and appreciate your patience in the meantime.
        </p>
         <p 
          className="mb-6 text-xs text-white/50 drop-shadow-md mx-auto"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
        >
          -BY TEAM VEGAH
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
