
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast.success('Successfully logged in');
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="page-transition pt-24 min-h-screen">
      <div className="container py-12 flex flex-col items-center">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="heading-md mb-2">Welcome Back</h1>
            <p className="text-foreground/70">Sign in to your account to continue</p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-foreground/70 mb-4">OR</p>
              <Button variant="outline" className="w-full mb-4">
                Sign in with Google
              </Button>
              
              <p className="text-sm mt-6">
                Don't have an account?{" "}
                <Link to="/register" className="text-accent hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
