
// //first time sign in
// import {Link} from "react-router-dom";
// import {auth} from "../config/firebase";
// import {createUserWithEmailAndPassword} from "firebase/auth";
// import {useState} from "react";
// import {useNavigate} from 'react-router-dom';

// function Home(){
//     const his=useNavigate()
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
    
//     const handleSubmit= async (e)=>{
//       e.preventDefault();
//       try{
//       await createUserWithEmailAndPassword(auth,email,password)
//       his('/home')
//       }catch(err){
//           alert(err);
//       }
      
//     }
      
//       return(
//          <>
//          <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         height: "100%"
//       }}
//     >
//           <form onSubmit={handleSubmit}>
  
//               <input placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
//               <input placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
//               <button type="submit" >Sign In</button>
//           </form>
//            <Link to="/login">
//            <button>login!</button>
//        </Link>
//        </div>
//        </>
//       )

// }
// export default Home;
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const his = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      his('/home')
    } catch (err) {
      alert(err);
    }
  }

  const gradientBackground = {
    background: "linear-gradient(to bottom, #9400D3, #FF00FF)", // Violet gradient background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={gradientBackground}>
      <div style={{ marginTop: "20px" }}>
        {/* Add space above the form */}
      </div>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "black", textAlign: "center", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}>
        <h3 style={{color:"white"}}>Sign up!</h3>
        <input
          placeholder="Enter Student Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            margin: "10px 0",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "black",
            display: "block", // Display input as a block element
          }}
        />
        <input
         type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            margin: "10px 0",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "black",
            display: "block", // Display input as a block element
            opacity: 0.9,
            transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
          }}
        />
        <button
          type="submit"
          style={{
            width: "320px",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            display: "block", // Display button as a block element
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#9400D3")} // Change background color on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = "red")} // Revert back to initial color on hover out
        
        >
          Sign Up!
        </button>
      </form>
      <div style={{ color: "white" }}>
  <p>Already have an account? Click on Signin!</p>
</div>

      <div style={{ marginTop: "20px" , textAlign:"center"}}>
        <Link to="/login"
             style={{
              width: "120px",
              padding: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              display: "block", // Display button as a block element
              
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#9400D3")} // Change background color on hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = "red")} // Revert back to initial color on hover out
          
         >
             Signin!
        </Link>
      </div>
    </div>
  );
}

export default Home;


