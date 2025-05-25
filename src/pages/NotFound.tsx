
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, GraduationCap, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Sprout className="w-12 h-12 text-green-600" />
          <GraduationCap className="w-12 h-12 text-amber-600" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist. Let's get you back to cultivating knowledge and faith.
        </p>
        
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </Button>
        
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 italic">
            "Trust in the Lord with all your heart and lean not on your own understanding" - Proverbs 3:5
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
