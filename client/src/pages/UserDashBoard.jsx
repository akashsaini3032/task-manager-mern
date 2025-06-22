// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const UserDashBoard=()=>{
// const navigate = useNavigate();

//  const logout=()=>{
//     localStorage.clear();
//     navigate("/");
//  }


//     return(
//         <>
//         <div id="userheader">
//               <h1> User DashBoard</h1>
//         </div>
//          <div id="userdisplayname">
//            Welcome : {localStorage.getItem("username") } !
//            <a href="#" onClick={logout}>Logout</a> 
//          </div>
//          <div id="usermenu">
           
//              <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">User Area</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
//             <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
//             <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
//             <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
            
//           </Nav>
//         </Container>
//       </Navbar>

//          </div>

        
//           <Outlet/>


//         </>
//     )
// }

// export default UserDashBoard;



import { Link, Outlet, useNavigate } from 'react-router-dom';

const UserDashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <h2 className="dashboard__logo">User Area🧑‍💼</h2>
        <nav className="dashboard__nav">

          <Link to="mytask" className="dashboard__link">My Task📝</Link>
          <Link to="mytask" className="dashboard__link">Task OVerView🧠 </Link>
          <Link to="mytask" className="dashboard__link">Calender&TimeLine⏰</Link>
          <Link to="mytask" className="dashboard__link">Smart Reminders⏳</Link>
          <Link to="mytask" className="dashboard__link">Activity Feed</Link>
          <Link to="mytask" className="dashboard__link">Widgets</Link>
        </nav>
        <button className="dashboard__logout" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="dashboard__main">
        <header className="dashboard__header">
          <h1>User👤 Dashboard</h1>
          <p>Welcome: <strong>{localStorage.getItem("username")}</strong></p>
        </header>
        <section className="dashboard__content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default UserDashBoard;


