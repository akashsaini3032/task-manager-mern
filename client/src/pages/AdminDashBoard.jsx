// import {Link, Outlet} from "react-router-dom"
// import { useNavigate } from "react-router-dom";

// const AdminDashBoard=()=>{

//     const navigate= useNavigate();

//   const logout=()=>{
//      localStorage.clear();
//       navigate("/");
//   }


//     return(
//          <>
//            <div id="dashboard">
//                 <h1 align="center"> Welcome To Admin DashBorad</h1>            
//             </div> 
//              <div>
//                      <h5> Welcome : {localStorage.getItem("adminuser")} 
//                         <a href="#" onClick={logout}>Logout</a></h5>
//                 </div>   
//             <div id="admindata">
//                 <div id="adminleftmenu">
//                  <Link to="createuser" className="adminmenu">
                 
//                   Create New User

//                  </Link> 
//                   <br/> <br />

//                   <Link to="assigntask" className="adminmenu">
                 
//                   Assign Task

//                  </Link> 

//                   <br/> <br />

//                   <Link to="taskdetail" className="adminmenu">
                 
//                   Task Detail

//                  </Link> 
                   
//                 </div>
               
//                 <div id="rightdata">
                  
//                         <Outlet/>

//                 </div>
                
//             </div>  
//         </>
//     )
// }

// export default AdminDashBoard;

import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminDashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {/* Header Section */}
      <div className="admin-dashboard-header">
        <h1 className="admin-dashboard-title">Welcome To Admin Dashboard</h1>
      </div>

      {/* Welcome Bar with Logout */}
      <div className="admin-welcome-bar">
        <h5 className="admin-welcome-text">
          Welcome: {localStorage.getItem("adminuser")}
        </h5>
        <a href="#" onClick={logout} className="admin-logout-link">
          Logout
        </a>
      </div>

      {/* Main Layout */}
      <div className="admin-dashboard-wrapper">
        {/* Sidebar */}
        <div className="admin-dashboard-sidebar">
          <Link to="createuser" className="admin-dashboard-link">
            ➕ Create New User
          </Link>

          <Link to="assigntask" className="admin-dashboard-link">
            ✅ Assign Task
          </Link>

          <Link to="taskdetail" className="admin-dashboard-link">
            📋 Task Detail
          </Link>
        </div>

        {/* Content Outlet */}
        <div className="admin-dashboard-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
