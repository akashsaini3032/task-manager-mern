// import Form from 'react-bootstrap/Form';
// import { FaUserCircle } from "react-icons/fa";
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
// import BackEndUrl from '../config/BackendUrl';
// import  {useNavigate} from "react-router-dom";
// const Header=()=>{
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const navigate= useNavigate();

//   const handleSubmit=async(e)=>{
//      e.preventDefault();
//        let api=`${BackEndUrl}/user/userlogin`;
//       try {
//            const response = await axios.post(api, {email, password});
//            console.log(response)
//            localStorage.setItem("username", response.data.User.name);
//            localStorage.setItem("userid", response.data.User._id);
//           navigate("userdashboard")
//       } catch (error) {
//           console.log(error);
//       }
//   }

//   return(
//         <>
//          <div id="header">
//            <h1> The Task Management System </h1>
//            <FaUserCircle  onClick={handleShow}  />
//          </div>

//             <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
         
//            <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//        Login
//       </Button>
//     </Form>
      

//         </Modal.Body>
//       </Modal>
//         </>
//     )
// }

// export default Header;




import Form from 'react-bootstrap/Form';
import { FaUserCircle, FaBell, FaCog, FaMoon } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import BackEndUrl from '../config/BackendUrl';
import  {useNavigate} from "react-router-dom";


const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackEndUrl}/user/userlogin`;
    try {
      const response = await axios.post(api, { email, password });
      console.log(response);
      localStorage.setItem("username", response.data.User.name);
      localStorage.setItem("userid", response.data.User._id);
      navigate("userdashboard")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="header">
        <h1>📝 Task Manager</h1>

        <div className="header-tools">
          <input type="text" className="search-input" placeholder="🔍 Search tasks..." />

          <select className="filter-select">
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <FaBell className="icon-btn" title="Notifications" />
          <FaCog className="icon-btn" title="Settings" />
          <FaMoon className="icon-btn" title="Toggle Dark Mode" />
          <FaUserCircle className="user-icon" onClick={handleShow} title="Login" />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="form-floating">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
              <Form.Label>Email address</Form.Label>
            </div>

            <div className="form-floating">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <Form.Label>Password</Form.Label>
            </div>

            <div className="form-footer">
              <Form.Check label="Remember Me" />
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>

            <Button variant="primary" type="submit" className="login-button">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
