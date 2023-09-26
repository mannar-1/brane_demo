
//already signed in
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const his = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      his('/home')
    } catch (err) {
      alert(err);
    }
  }

  const gradientBackground = {
    background: "linear-gradient(to bottom, #4B0082, #8A2BE2)", // Violet gradient background with different colors
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const signUpStyles = {
    color: "white",
    opacity: 0.9,
    transition: "color 0.3s ease-in-out", // Transition effect for color change
    cursor: "pointer",
  };

  const buttonStyles = {
    width: "320px",
    padding: "10px",
    backgroundColor: "rgba(255, 0, 0, 0.9)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    display: "block",
    opacity: 0.9,
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out", // Transition effect for color change
  };

  return (
    <div style={gradientBackground}>
      <div style={{ marginTop: "20px" }}>
        {/* Add space above the form */}
      </div>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", textAlign: "center", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}>
        <h3 style={{ ...signUpStyles, fontWeight: "bold" }}>Signin</h3>
        <input
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            margin: "10px 0",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "black",
            display: "block", // Display input as a block element
          }}
        />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            margin: "10px 0",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "black",
            display: "block", // Display input as a block element
          }}
        />
       
        <button
          type="submit"
          style={{
            ...buttonStyles,
            backgroundColor: "red", // Initial background color
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#4B0082")} // Change background color on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = "red")} // Revert back to initial color on hover out
        >
          Signin
        </button>
      </form>
      
    </div>
  );
}

export default Home;
