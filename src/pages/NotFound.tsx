
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background page-transition">
      <div className="text-center container px-6">
        <h1 className="heading-xl mb-6">404</h1>
        <p className="text-xl text-foreground/70 mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-foreground text-background font-medium rounded-lg inline-flex items-center transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <HomeIcon className="mr-2 h-5 w-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
