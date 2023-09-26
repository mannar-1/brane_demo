import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function KnowledgeHubPage() {
  const navbarStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const welcomeSectionStyle = {
    background: "linear-gradient(to bottom, #4B0082, #8A2BE2)", // Violet gradient background
    minHeight: "calc(100vh - 60px)", // Subtract navbar height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
    textAlign: "center",
  };

  const logoutButtonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the home page or any other desired page after logout
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div style={navbarStyle}>
        <div>Brane Enterprises</div>
      </div>

      {/* Welcome Section */}
      <div style={welcomeSectionStyle}>
        <h1 style={titleStyle}>Welcome to the Knowledge Hub</h1>
        <p>Page of Brane</p>
        <button style={logoutButtonStyle} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default KnowledgeHubPage;
