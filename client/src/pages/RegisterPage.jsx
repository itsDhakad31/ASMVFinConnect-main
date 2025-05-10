import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-container">
      {/* Left Side - Register Form */}
      <div className="register-left">
        <h2>Register</h2>
        <form className="register-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="register-submit">Register</button>
        </form>
        <p className="register-switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      {/* Right Side - 3D Card Preview */}
      <div className="register-right">
        <div className="register-card-preview">
          <img src="/assets/Card1.png" alt="Credit Card 1" className="register-card-image register-card1" />
          <img src="/assets/Card2.png" alt="Credit Card 2" className="register-card-image register-card2" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
