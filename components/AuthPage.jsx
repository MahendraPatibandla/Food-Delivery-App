import React from "react";
import "./AuthPage.css";
import ArtImage from "../assets/Art.jpg";

const AuthPage = () => {
  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="auth-left">
        <h1>Order<span className="highlight">UK</span></h1>
        <h2>Welcome Back 👋</h2>
        <p>Today is a new day. It's your day. You shape it. Sign in to start ordering.</p>

        <form className="auth-form">
          <label>Email</label>
          <input type="email" placeholder="Example@email.com" required />

          <label>Password</label>
          <input type="password" placeholder="At least 8 characters" required />

          <button type="submit" className="auth-btn">Sign In</button>
        </form>

        <p className="auth-footer">
          Don't you have an account? <a href="/signup">Sign up</a>
        </p>
      </div>

      {/* Right Section */}
      <div className="auth-right">
        <img src={ArtImage} alt="Food Art" className="auth-image" />
      </div>
    </div>
  );
};

export default AuthPage;
