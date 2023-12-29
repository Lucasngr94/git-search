import Link from "../Header/Link";
import { useState } from "react";

interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
  }
  
  const LoginPage: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [userLogin, setUserLogin] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      onLogin(userLogin,password,() => {
        window.location.href = "/home";
      });
    };
  
    return (
        <>  
            <Link />
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={userLogin}
                onChange={(e) => setUserLogin(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            </form>
        </>
    );
};

export default LoginPage