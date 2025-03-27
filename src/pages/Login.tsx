
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login, isLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const toggleView = () => {
    setIsLogin(!isLogin);
    setErrorMessage('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      if (isLogin) {
        await login(email, password);
        toast({
          title: "Welcome back!",
          description: "You've successfully logged in.",
        });
        navigate('/');
      } else {
        // In a real app, this would call a signup function
        toast({
          title: "Account created",
          description: "Your account has been successfully created.",
        });
        setIsLogin(true);
      }
    } catch (error) {
      setErrorMessage('Invalid credentials. For demo, use demo@example.com / password');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm animate-scale-in">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p className="text-muted-foreground mt-2">
              {isLogin 
                ? 'Login to access your account' 
                : 'Sign up to get started with ByteNRun'
              }
            </p>
          </div>
          
          {errorMessage && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-primary hover:text-primary/80">
                  Forgot password?
                </a>
              </div>
            )}
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
              <button
                type="button"
                className="ml-1 text-primary hover:text-primary/80"
                onClick={toggleView}
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>
          
          {isLogin && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-11">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545 10.239v3.821h5.445c-0.643 2.783-2.735 4.269-5.445 4.269-3.306 0-6-2.694-6-6s2.694-6 6-6c1.383 0 2.703 0.482 3.738 1.327l2.906-2.906c-1.889-1.789-4.381-2.681-6.644-2.681-5.514 0-10 4.486-10 10s4.486 10 10 10c8.455 0 10.399-7.693 9.596-11.83h-9.596z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-11">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h21.352c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0zm-5.616 17.99h-2.172v-3.455c0-.811-.033-1.856-1.13-1.856-1.131 0-1.304.884-1.304 1.796v3.515H10.28V8.953h2.086v.956h.029c.29-.55.997-1.13 2.053-1.13 2.198 0 2.605 1.447 2.605 3.329v5.882h.007z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
