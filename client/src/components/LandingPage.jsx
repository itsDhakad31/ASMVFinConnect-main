import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FinConnect</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="nav-buttons">
          <Link to="/login" className="login">Log In</Link>
          <Link to="/register" className="signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <p className="badge">Financial Control Platform</p>
        <h1>Expert Guidance to Optimize Your Financial Growth and Security</h1>
        <p className="hero-subtext">
          Our expert guidance will optimize your financial portfolio and lay the foundation for a secure and prosperous future.
        </p>
        <div className="hero-buttons">
          <Link to="/register" className="btn primary">Get Started</Link>
          <button className="btn secondary">Try Demo</button>
        </div>
      </header>

      {/* Dashboard Image */}
      <div className="dashboard-container">
        <img src="/assets/dashboard.png" alt="Dashboard Preview" className="dashboard-image" />
      </div>

      {/* Features Section */}
        <section className="features-section">
            <div className="feature">
                <img src="/assets/icon1.png" alt="Multi-Account Integration" className="feature-icon" />
                <h3>Multi-Account Integration</h3>
                <p>Whether you have personal or investment accounts, we seamlessly integrate them all in one place.</p>
            </div>
            <div className="feature">
                <img src="/assets/icon2.png" alt="AI Powered Chatbot" className="feature-icon" />
                <h3>AI Powered Chatbot</h3>
                <p>Get 24/7 financial assistance with our AI chatbot, providing instant insights and support for your queries.</p>
            </div>
            <div className="feature">
                <img src="/assets/icon3.png" alt="Privacy and Security" className="feature-icon" />
                <h3>Privacy and Security</h3>
                <p>Advanced encryption ensures your financial data stays safe, private, and protected from threats.</p>
            </div>
        </section>
    </div>
  );
};

export default LandingPage;
