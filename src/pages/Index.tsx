
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Welcome To Auth Kit 🗃️
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern authentication system built with React, Supabase, and TypeScript.
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Authentication Status</CardTitle>
            <CardDescription>
              {user ? "You are currently signed in" : "Please sign in to continue"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Welcome back, {user.email}!
                </p>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </Button>
                  <Button variant="outline" onClick={signOut}>
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Sign in to access your dashboard and protected features.
                </p>
                <Button asChild className="w-full">
                  <Link to="/auth">Sign In / Sign Up</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-sm text-gray-500">
          <p>
            This is a starter template for building authentication systems with React and Supabase.
            Feel free to customize it to fit your needs.
          </p>
      </div>
    </div>
    </div>
  );
};

export default Index;
