import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Side - Login Form */}
      <div className="login-left">
        <h1>Login</h1>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-submit">Login</button>
        </form>
        <p className="login-switch-text">
          Don't have an account? <Link to="/register">Sign-Up</Link>
        </p>
      </div>

      {/* Right Side - 3D Card Preview */}
      <div className="login-right">
        <div className="login-card-preview">
          <img src="./assets/Card1.png" alt="Credit Card 1" className="login-card-image login-card1" />
          <img src="./assets/Card2.png" alt="Credit Card 2" className="login-card-image login-card2" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
