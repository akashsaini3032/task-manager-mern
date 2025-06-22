// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackEndUrl from '../config/BackendUrl';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// const Home=()=>{
//     const [adminid, setAdminid]= useState("");
//     const [password, setPassword]= useState("");
//     const navigate = useNavigate();

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try {
//             let api=`${BackEndUrl}/admin/logincheck`;
//            const response = await axios.post(api, {adminid:adminid, password:password});
//            console.log(response);
//            localStorage.setItem("adminuser", response.data.admin.name);
//            navigate("admindashboard");
//         } catch (error) {
//           alert(error.response.data.msg);
//         }

       
//     }

//     return(
//         <>
          
//           <h2 align="center">Admin Login Form</h2>
//            <Form style={{width:"400px", margin:"auto"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter ID</Form.Label>
//         <Form.Control type="text" value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} placeholder="Enter ID" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
//       </Form.Group>
     
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Login
//       </Button>
//     </Form>
//         </>
//     )
// }

// export default Home;



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackendUrl';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${BackEndUrl}/admin/logincheck`;
      const response = await axios.post(api, { adminid: adminid, password: password });
      console.log(response);
      localStorage.setItem("adminuser", response.data.admin.name);
      navigate("admindashboard");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="form-title">🔐 Admin Login</h2>

        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Admin ID</Form.Label>
            <Form.Control
              type="text"
              value={adminid}
              onChange={(e) => setAdminid(e.target.value)}
              placeholder="Enter ID"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="password-wrapper">
              <Form.Control
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </Form.Group>

          <div className="extra-links">
            <a href="#">Forgot Password?</a>
            <a href="#">Create Account</a>
          </div>

          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>

          <div className="social-login">
            <p>or login with</p>
            <button className="google-btn">Google</button>
            <button className="github-btn">GitHub</button>
          </div>
        </Form>

        <div className="tip-box">
          💡 Tip: Review your top 3 tasks before starting your day!
        </div>
      </div>
    </div>
  );
};

export default Home;
