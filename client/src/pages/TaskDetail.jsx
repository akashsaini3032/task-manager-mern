// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// const TaskDetail=()=>{
//     const [mydata, setMydata] = useState([]);

//     const loadData=async()=>{
//           let api=`${BackEndUrl}/admin/taskdetail`
//           try {
//               const response= await axios.get(api);
//               console.log(response.data);
//               setMydata(response.data);
//           } catch (error) {
//              console.log(error);
//           }
//     }

//     useEffect(()=>{
//         loadData();
//     }, [])

//    const changeTaskStatus=async(id)=>{
//     let api=`${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
//     try {
//           const response = await axios.get(api);
//           console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

//     loadData();
//    }

//     let no=0
//     const ans= mydata.map((key)=>{
//          no++;
//         return(
//             <>
//               <tr>
//                 <td>

//                {key.taskstatus ? (<>
//                  <img src={right }  width="30" height="30"/>
//                </>) :(
//                 <>
//                     <img src={wrong } width="30" height="30" />
//                 </>
//                )}

//                 </td>
//                 <td>{no}</td>
//                 <td>{key.userid.name}</td>
//                 <td>{key.userid.email}</td>
//                 <td>{key.title}</td>
//                 <td>{key.description}</td>
//                 <td> 

                      
//                       {key.taskstatus ? (<>
//                         <Button variant="success" size="sm" onClick={()=>{changeTaskStatus(key._id)}}> ReAssign </Button>
                      
//                       </>) :(<>
                      
//                        <Button variant="danger" size="sm"> Pending... </Button></>)}
                   
                     
//                 </td>
//               </tr>
//             </>
//         )
//     })
//     return(
//         <>
//           <h2> Task Detail List</h2>
//            <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th></th>
//           <th>#</th>
//           <th>Employee Name</th>
//           <th>Email</th>
//           <th>Task Title</th>
//           <th>Description</th>
//           <th> Action</th>
//         </tr>
//       </thead>
//       <tbody>
//      {ans}
//       </tbody>
//   </Table>
//         </>
//     )
// }

// export default TaskDetail;


// Add Pagination







// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// const TaskDetail = () => {
//   const [mydata, setMydata] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tasksPerPage, setTasksPerPage] = useState(5);

//   const loadData = async () => {
//     const api = `${BackEndUrl}/admin/taskdetail`;
//     try {
//       const response = await axios.get(api);
//       setMydata(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const changeTaskStatus = async (id) => {
//     const api = `${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
//     try {
//       await axios.get(api);
//     } catch (error) {
//       console.log(error);
//     }
//     loadData();
//   };

//   // Filtered data based on search
//   const filteredData = mydata.filter(task =>
//     task.userid.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
//   const totalPages = Math.ceil(filteredData.length / tasksPerPage);

//   let no = indexOfFirstTask;

//   return (
//     <>
//       <h2>Task Detail List</h2>

//       {/* Search Bar */}
//       <InputGroup className="mb-3 w-50">
//         <InputGroup.Text>🔍</InputGroup.Text>
//         <Form.Control
//           placeholder="Search by employee name"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1); // reset to page 1 on new search
//           }}
//         />
//       </InputGroup>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>Employee Name</th>
//             <th>Email</th>
//             <th>Task Title</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.map((key) => {
//             no++;
//             return (
//               <tr key={key._id}>
//                 <td>
//                   {key.taskstatus ? (
//                     <img src={right} width="30" height="30" />
//                   ) : (
//                     <img src={wrong} width="30" height="30" />
//                   )}
//                 </td>
//                 <td>{no}</td>
//                 <td>{key.userid.name}</td>
//                 <td>{key.userid.email}</td>
//                 <td>{key.title}</td>
//                 <td>{key.description}</td>
//                 <td>
//                   {key.taskstatus ? (
//                     <Button variant="success" size="sm" onClick={() => changeTaskStatus(key._id)}>
//                       ReAssign
//                     </Button>
//                   ) : (
//                     <Button variant="danger" size="sm">Pending...</Button>
//                   )}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex flex-column align-items-center mt-4">
//         <div className="mb-2">
//           <strong>Page {currentPage} of {totalPages}</strong>
//         </div>

//         <nav>
//           <ul className="pagination flex-wrap justify-content-center">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
//             </li>
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
//             </li>

//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
//               .map((page, i, arr) => (
//                 <>
//                   {i > 0 && page - arr[i - 1] > 1 && (
//                     <li className="page-item disabled" key={`ellipsis-${page}`}>
//                       <span className="page-link">...</span>
//                     </li>
//                   )}
//                   <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
//                     <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
//                   </li>
//                 </>
//               ))}

//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
//             </li>
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default TaskDetail;



// search code


// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Dropdown from "react-bootstrap/Dropdown";

// const TaskDetail = () => {
//   const [mydata, setMydata] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchMode, setSearchMode] = useState("name"); // "name" or "all"
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tasksPerPage, setTasksPerPage] = useState(5);

//   const loadData = async () => {
//     const api = `${BackEndUrl}/admin/taskdetail`;
//     try {
//       const response = await axios.get(api);
//       setMydata(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const changeTaskStatus = async (id) => {
//     const api = `${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
//     try {
//       await axios.get(api);
//     } catch (error) {
//       console.log(error);
//     }
//     loadData();
//   };

//   // Smart Filter Logic
//   const filteredData = mydata.filter(task => {
//     const term = searchTerm.toLowerCase();
//     const name = task.userid.name?.toLowerCase() || "";
//     const email = task.userid.email?.toLowerCase() || "";
//     const title = task.title?.toLowerCase() || "";
//     const description = task.description?.toLowerCase() || "";

//     if (searchMode === "name") {
//       return name.includes(term);
//     } else {
//       return (
//         name.includes(term) ||
//         email.includes(term) ||
//         title.includes(term) ||
//         description.includes(term)
//       );
//     }
//   });

//   // Pagination logic
//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
//   const totalPages = Math.ceil(filteredData.length / tasksPerPage);
//   let no = indexOfFirstTask;

//   return (
//     <>
//       <h2>Task Detail List</h2>

//       {/* Search Bar with Filter Mode */}
//       <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
//         <InputGroup className="w-auto">
//           <InputGroup.Text>🔍</InputGroup.Text>
//           <Form.Control
//             placeholder={`Search by ${searchMode === "name" ? "employee name" : "any field"}`}
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//           />
//         </InputGroup>

//         <Dropdown onSelect={(mode) => setSearchMode(mode)}>
//           <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
//             Search In: {searchMode === "name" ? "Name" : "All Fields"}
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item eventKey="name">Name</Dropdown.Item>
//             <Dropdown.Item eventKey="all">All Fields</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       {/* Table */}
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>Employee Name</th>
//             <th>Email</th>
//             <th>Task Title</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.map((key) => {
//             no++;
//             return (
//               <tr key={key._id}>
//                 <td>
//                   {key.taskstatus ? (
//                     <img src={right} width="30" height="30" alt="done" />
//                   ) : (
//                     <img src={wrong} width="30" height="30" alt="pending" />
//                   )}
//                 </td>
//                 <td>{no}</td>
//                 <td>{key.userid.name}</td>
//                 <td>{key.userid.email}</td>
//                 <td>{key.title}</td>
//                 <td>{key.description}</td>
//                 <td>
//                   {key.taskstatus ? (
//                     <Button variant="success" size="sm" onClick={() => changeTaskStatus(key._id)}>
//                       ReAssign
//                     </Button>
//                   ) : (
//                     <Button variant="danger" size="sm">Pending...</Button>
//                   )}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>

//       {/* Pagination Controls */}
//       <div className="d-flex flex-column align-items-center mt-4">
//         <div className="mb-2">
//           <strong>Page {currentPage} of {totalPages}</strong>
//         </div>

//         <nav>
//           <ul className="pagination flex-wrap justify-content-center">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
//             </li>
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
//             </li>

//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
//               .map((page, i, arr) => (
//                 <>
//                   {i > 0 && page - arr[i - 1] > 1 && (
//                     <li className="page-item disabled" key={`ellipsis-${page}`}>
//                       <span className="page-link">...</span>
//                     </li>
//                   )}
//                   <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
//                     <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
//                   </li>
//                 </>
//               ))}

//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
//             </li>
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default TaskDetail;




// Edit and Update



// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Dropdown from "react-bootstrap/Dropdown";
// import Modal from "react-bootstrap/Modal";

// const TaskDetail = () => {
//   const [mydata, setMydata] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchMode, setSearchMode] = useState("name");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tasksPerPage, setTasksPerPage] = useState(5);

//   const [showModal, setShowModal] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");

//   const loadData = async () => {
//     const api = `${BackEndUrl}/admin/taskdetail`;
//     try {
//       const response = await axios.get(api);
//       setMydata(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const changeTaskStatus = async (id) => {
//     const api = `${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
//     try {
//       await axios.get(api);
//     } catch (error) {
//       console.log(error);
//     }
//     loadData();
//   };

//   const handleEdit = (task) => {
//     setEditTask(task);
//     setEditTitle(task.title);
//     setEditDescription(task.description);
//     setShowModal(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`${BackEndUrl}/admin/updatetask/${editTask._id}`, {
//         title: editTitle,
//         description: editDescription
//       });
//       setShowModal(false);
//       loadData();
//     } catch (error) {
//       console.error("Update failed:", error);
//     }
//   };

//   // Smart filter logic
//   const filteredData = mydata.filter(task => {
//     const term = searchTerm.toLowerCase();
//     const name = task.userid.name?.toLowerCase() || "";
//     const email = task.userid.email?.toLowerCase() || "";
//     const title = task.title?.toLowerCase() || "";
//     const description = task.description?.toLowerCase() || "";

//     if (searchMode === "name") {
//       return name.includes(term);
//     } else {
//       return (
//         name.includes(term) ||
//         email.includes(term) ||
//         title.includes(term) ||
//         description.includes(term)
//       );
//     }
//   });

//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
//   const totalPages = Math.ceil(filteredData.length / tasksPerPage);
//   let no = indexOfFirstTask;

//   return (
//     <>
//       <h2>Task Detail List</h2>

//       {/* Search Bar */}
//       <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
//         <InputGroup className="w-auto">
//           <InputGroup.Text>🔍</InputGroup.Text>
//           <Form.Control
//             placeholder={`Search by ${searchMode === "name" ? "employee name" : "any field"}`}
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//           />
//         </InputGroup>

//         <Dropdown onSelect={(mode) => setSearchMode(mode)}>
//           <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
//             Search In: {searchMode === "name" ? "Name" : "All Fields"}
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item eventKey="name">Name</Dropdown.Item>
//             <Dropdown.Item eventKey="all">All Fields</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       {/* Table */}
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>Employee Name</th>
//             <th>Email</th>
//             <th>Task Title</th>
//             <th>Description</th>
//             <th>Action</th>
//             <th>Edit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.map((task) => {
//             no++;
//             return (
//               <tr key={task._id}>
//                 <td>
//                   {task.taskstatus ? (
//                     <img src={right} width="30" height="30" alt="done" />
//                   ) : (
//                     <img src={wrong} width="30" height="30" alt="pending" />
//                   )}
//                 </td>
//                 <td>{no}</td>
//                 <td>{task.userid.name}</td>
//                 <td>{task.userid.email}</td>
//                 <td>{task.title}</td>
//                 <td>{task.description}</td>
//                 <td>
//                   {task.taskstatus ? (
//                     <Button variant="success" size="sm" onClick={() => changeTaskStatus(task._id)}>
//                       ReAssign
//                     </Button>
//                   ) : (
//                     <Button variant="danger" size="sm">Pending...</Button>
//                   )}
//                 </td>
//                 <td>
//                   <Button variant="warning" size="sm" onClick={() => handleEdit(task)}>
//                     Edit
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex flex-column align-items-center mt-4">
//         <div className="mb-2">
//           <strong>Page {currentPage} of {totalPages}</strong>
//         </div>

//         <nav>
//           <ul className="pagination flex-wrap justify-content-center">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
//             </li>
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
//             </li>

//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
//               .map((page, i, arr) => (
//                 <>
//                   {i > 0 && page - arr[i - 1] > 1 && (
//                     <li className="page-item disabled" key={`ellipsis-${page}`}>
//                       <span className="page-link">...</span>
//                     </li>
//                   )}
//                   <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
//                     <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
//                   </li>
//                 </>
//               ))}

//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
//             </li>
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Edit Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Task</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editTitle}
//                 onChange={(e) => setEditTitle(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={editDescription}
//                 onChange={(e) => setEditDescription(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="primary" onClick={handleUpdate}>Update</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default TaskDetail;


// delete task


// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Dropdown from "react-bootstrap/Dropdown";
// import Modal from "react-bootstrap/Modal";

// const TaskDetail = () => {
//   const [mydata, setMydata] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchMode, setSearchMode] = useState("name");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tasksPerPage, setTasksPerPage] = useState(5);

//   const [showModal, setShowModal] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");

//   const loadData = async () => {
//     try {
//       const response = await axios.get(`${BackEndUrl}/admin/taskdetail`);
//       setMydata(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const changeTaskStatus = async (id) => {
//     try {
//       await axios.get(`${BackEndUrl}/admin/changetaskstatus/?id=${id}`);
//       loadData();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEdit = (task) => {
//     setEditTask(task);
//     setEditTitle(task.title);
//     setEditDescription(task.description);
//     setShowModal(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`${BackEndUrl}/admin/updatetask/${editTask._id}`, {
//         title: editTitle,
//         description: editDescription
//       });
//       setShowModal(false);
//       loadData();
//     } catch (error) {
//       console.error("Update failed:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this task?")) return;

//     try {
//       await axios.delete(`${BackEndUrl}/admin/deletetask/${id}`);
//       loadData();
//     } catch (error) {
//       console.error("Delete failed:", error);
//     }
//   };

//   const filteredData = mydata.filter(task => {
//     const term = searchTerm.toLowerCase();
//     const name = task.userid.name?.toLowerCase() || "";
//     const email = task.userid.email?.toLowerCase() || "";
//     const title = task.title?.toLowerCase() || "";
//     const description = task.description?.toLowerCase() || "";

//     if (searchMode === "name") {
//       return name.includes(term);
//     } else {
//       return (
//         name.includes(term) ||
//         email.includes(term) ||
//         title.includes(term) ||
//         description.includes(term)
//       );
//     }
//   });

//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
//   const totalPages = Math.ceil(filteredData.length / tasksPerPage);
//   let no = indexOfFirstTask;

//   return (
//     <>
//       <h2>Task Detail List</h2>

//       {/* Search Bar */}
//       <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
//         <InputGroup className="w-auto">
//           <InputGroup.Text>🔍</InputGroup.Text>
//           <Form.Control
//             placeholder={`Search by ${searchMode === "name" ? "employee name" : "any field"}`}
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//           />
//         </InputGroup>

//         <Dropdown onSelect={(mode) => setSearchMode(mode)}>
//           <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
//             Search In: {searchMode === "name" ? "Name" : "All Fields"}
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item eventKey="name">Name</Dropdown.Item>
//             <Dropdown.Item eventKey="all">All Fields</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       {/* Table */}
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>Employee Name</th>
//             <th>Email</th>
//             <th>Task Title</th>
//             <th>Description</th>
//             <th>Action</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.map((task) => {
//             no++;
//             return (
//               <tr key={task._id}>
//                 <td>
//                   {task.taskstatus ? (
//                     <img src={right} width="30" height="30" alt="done" />
//                   ) : (
//                     <img src={wrong} width="30" height="30" alt="pending" />
//                   )}
//                 </td>
//                 <td>{no}</td>
//                 <td>{task.userid.name}</td>
//                 <td>{task.userid.email}</td>
//                 <td>{task.title}</td>
//                 <td>{task.description}</td>
//                 <td>
//                   {task.taskstatus ? (
//                     <Button variant="success" size="sm" onClick={() => changeTaskStatus(task._id)}>
//                       ReAssign
//                     </Button>
//                   ) : (
//                     <Button variant="danger" size="sm">Pending...</Button>
//                   )}
//                 </td>
//                 <td>
//                   <Button variant="warning" size="sm" onClick={() => handleEdit(task)}>
//                     Edit
//                   </Button>
//                 </td>
//                 <td>
//                   <Button variant="danger" size="sm" onClick={() => handleDelete(task._id)}>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex flex-column align-items-center mt-4">
//         <div className="mb-2">
//           <strong>Page {currentPage} of {totalPages}</strong>
//         </div>

//         <nav>
//           <ul className="pagination flex-wrap justify-content-center">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
//             </li>
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
//             </li>

//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
//               .map((page, i, arr) => (
//                 <>
//                   {i > 0 && page - arr[i - 1] > 1 && (
//                     <li className="page-item disabled" key={`ellipsis-${page}`}>
//                       <span className="page-link">...</span>
//                     </li>
//                   )}
//                   <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
//                     <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
//                   </li>
//                 </>
//               ))}

//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
//             </li>
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Edit Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Task</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editTitle}
//                 onChange={(e) => setEditTitle(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={editDescription}
//                 onChange={(e) => setEditDescription(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="primary" onClick={handleUpdate}>Update</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default TaskDetail;




// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Dropdown from "react-bootstrap/Dropdown";
// import Modal from "react-bootstrap/Modal";

// const TaskDetail = () => {
//   const [mydata, setMydata] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchMode, setSearchMode] = useState("name");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tasksPerPage, setTasksPerPage] = useState(5);

//   const [showModal, setShowModal] = useState(false);
//   const [editTask, setEditTask] = useState(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");

//   const [showAssignModal, setShowAssignModal] = useState(false);
//   const [assignInput, setAssignInput] = useState({});
//   const [allUsers, setAllUsers] = useState([]);
//   const [selectedUserId, setSelectedUserId] = useState("");

//   const loadData = async () => {
//     try {
//       const response = await axios.get(`${BackEndUrl}/admin/taskdetail`);
//       setMydata(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const changeTaskStatus = async (id) => {
//     try {
//       await axios.get(`${BackEndUrl}/admin/changetaskstatus/?id=${id}`);
//       loadData();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEdit = (task) => {
//     setEditTask(task);
//     setEditTitle(task.title);
//     setEditDescription(task.description);
//     setShowModal(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`${BackEndUrl}/admin/updatetask/${editTask._id}`, {
//         title: editTitle,
//         description: editDescription
//       });
//       setShowModal(false);
//       loadData();
//     } catch (error) {
//       console.error("Update failed:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this task?")) return;

//     try {
//       await axios.delete(`${BackEndUrl}/admin/deletetask/${id}`);
//       loadData();
//     } catch (error) {
//       console.error("Delete failed:", error);
//     }
//   };

//   const openAssignModal = async () => {
//     try {
//       const res = await axios.get(`${BackEndUrl}/admin/showuserdata`);
//       setAllUsers(res.data);
//       setShowAssignModal(true);
//     } catch (error) {
//       console.error("Error loading users:", error);
//     }
//   };

//   const handleAssignInput = (e) => {
//     const { name, value } = e.target;
//     setAssignInput(prev => ({ ...prev, [name]: value }));
//   };

//   const handleAssignSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BackEndUrl}/admin/assigntask`, {
//         ...assignInput,
//         userid: selectedUserId,
//       });
//       setShowAssignModal(false);
//       loadData();
//     } catch (error) {
//       console.error("Error assigning task:", error);
//     }
//   };

//   const filteredData = mydata.filter(task => {
//     const term = searchTerm.toLowerCase();
//     const name = task.userid.name?.toLowerCase() || "";
//     const email = task.userid.email?.toLowerCase() || "";
//     const title = task.title?.toLowerCase() || "";
//     const description = task.description?.toLowerCase() || "";

//     if (searchMode === "name") {
//       return name.includes(term);
//     } else {
//       return (
//         name.includes(term) ||
//         email.includes(term) ||
//         title.includes(term) ||
//         description.includes(term)
//       );
//     }
//   });

//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
//   const totalPages = Math.ceil(filteredData.length / tasksPerPage);
//   let no = indexOfFirstTask;

//   return (
//     <>
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>Task Detail List</h2>
//         <Button variant="primary" onClick={openAssignModal}>+ Add Task</Button>
//       </div>

//       <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
//         <InputGroup className="w-auto">
//           <InputGroup.Text>🔍</InputGroup.Text>
//           <Form.Control
//             placeholder={`Search by ${searchMode === "name" ? "employee name" : "any field"}`}
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//           />
//         </InputGroup>

//         <Dropdown onSelect={(mode) => setSearchMode(mode)}>
//           <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
//             Search In: {searchMode === "name" ? "Name" : "All Fields"}
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item eventKey="name">Name</Dropdown.Item>
//             <Dropdown.Item eventKey="all">All Fields</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>Employee Name</th>
//             <th>Email</th>
//             <th>Task Title</th>
//             <th>Description</th>
//             <th>Action</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.map((task) => {
//             no++;
//             return (
//               <tr key={task._id}>
//                 <td>
//                   {task.taskstatus ? (
//                     <img src={right} width="30" height="30" alt="done" />
//                   ) : (
//                     <img src={wrong} width="30" height="30" alt="pending" />
//                   )}
//                 </td>
//                 <td>{no}</td>
//                 <td>{task.userid.name}</td>
//                 <td>{task.userid.email}</td>
//                 <td>{task.title}</td>
//                 <td>{task.description}</td>
//                 <td>
//                   {task.taskstatus ? (
//                     <Button variant="success" size="sm" onClick={() => changeTaskStatus(task._id)}>
//                       ReAssign
//                     </Button>
//                   ) : (
//                     <Button variant="danger" size="sm">Pending...</Button>
//                   )}
//                 </td>
//                 <td>
//                   <Button variant="warning" size="sm" onClick={() => handleEdit(task)}>
//                     Edit
//                   </Button>
//                 </td>
//                 <td>
//                   <Button variant="danger" size="sm" onClick={() => handleDelete(task._id)}>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>

//       <div className="d-flex flex-column align-items-center mt-4">
//         <div className="mb-2">
//           <strong>Page {currentPage} of {totalPages}</strong>
//         </div>

//         <nav>
//           <ul className="pagination flex-wrap justify-content-center">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
//             </li>
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
//             </li>
//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
//               .map((page, i, arr) => (
//                 <>
//                   {i > 0 && page - arr[i - 1] > 1 && (
//                     <li className="page-item disabled" key={`ellipsis-${page}`}>
//                       <span className="page-link">...</span>
//                     </li>
//                   )}
//                   <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
//                     <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
//                   </li>
//                 </>
//               ))}
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
//             </li>
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Task</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editTitle}
//                 onChange={(e) => setEditTitle(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={editDescription}
//                 onChange={(e) => setEditDescription(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="primary" onClick={handleUpdate}>Update</Button>
//         </Modal.Footer>
//       </Modal>

//       <Modal show={showAssignModal} onHide={() => setShowAssignModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Assign New Task</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleAssignSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Select User</Form.Label>
//               <Form.Select
//                 value={selectedUserId}
//                 onChange={(e) => setSelectedUserId(e.target.value)}
//                 required
//               >
//                 <option value="">-- Choose --</option>
//                 {allUsers.map((user) => (
//                   <option key={user._id} value={user._id}>
//                     {user.name} ({user.email})
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="title"
//                 onChange={handleAssignInput}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={2}
//                 name="description"
//                 onChange={handleAssignInput}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Completion Day</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="complday"
//                 onChange={handleAssignInput}
//                 required
//               />
//             </Form.Group>
//             <Button variant="success" type="submit">Submit</Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default TaskDetail;







import axios from "axios";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackendUrl";
import Table from 'react-bootstrap/Table';
import right from "../images/right.png";
import wrong from "../images/wrong.jpeg";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";


const TaskDetail = () => {
  const [mydata, setMydata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMode, setSearchMode] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(5);

  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignInput, setAssignInput] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  const loadData = async () => {
    try {
      const response = await axios.get(`${BackEndUrl}/admin/taskdetail`);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const changeTaskStatus = async (id) => {
    try {
      await axios.get(`${BackEndUrl}/admin/changetaskstatus/?id=${id}`);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${BackEndUrl}/admin/updatetask/${editTask._id}`, {
        title: editTitle,
        description: editDescription
      });
      setShowModal(false);
      loadData();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await axios.delete(`${BackEndUrl}/admin/deletetask/${id}`);
      loadData();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const openAssignModal = async () => {
    try {
      const res = await axios.get(`${BackEndUrl}/admin/showuserdata`);
      setAllUsers(res.data);
      setShowAssignModal(true);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleAssignInput = (e) => {
    const { name, value } = e.target;
    setAssignInput(prev => ({ ...prev, [name]: value }));
  };

  const handleAssignSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BackEndUrl}/admin/assigntask`, {
        ...assignInput,
        userid: selectedUserId,
      });
      setShowAssignModal(false);
      loadData();
    } catch (error) {
      console.error("Error assigning task:", error);
    }
  };

  const filteredData = mydata.filter(task => {
    const term = searchTerm.toLowerCase();
    const name = task.userid.name?.toLowerCase() || "";
    const email = task.userid.email?.toLowerCase() || "";
    const title = task.title?.toLowerCase() || "";
    const description = task.description?.toLowerCase() || "";

    if (searchMode === "name") {
      return name.includes(term);
    } else {
      return (
        name.includes(term) ||
        email.includes(term) ||
        title.includes(term) ||
        description.includes(term)
      );
    }
  });

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredData.length / tasksPerPage);
  let no = indexOfFirstTask;

  return (
    <div className="task-detail-wrapper">{/* ✅ Wrapper for scoped styles */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Task Detail List</h2>
        <Button variant="primary" onClick={openAssignModal}>+ Add Task</Button>
      </div>

      <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
        <InputGroup className="w-auto">
          <InputGroup.Text>🔍</InputGroup.Text>
          <Form.Control
            placeholder={`Search by ${searchMode === "name" ? "employee name" : "any field"}`}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </InputGroup>

        <Dropdown onSelect={(mode) => setSearchMode(mode)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
            Search In: {searchMode === "name" ? "Name" : "All Fields"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="name">Name</Dropdown.Item>
            <Dropdown.Item eventKey="all">All Fields</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Action</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task) => {
            no++;
            return (
              <tr key={task._id}>
                <td>
                  <img
                    src={task.taskstatus ? right : wrong}
                    width="30"
                    height="30"
                    alt={task.taskstatus ? "done" : "pending"}
                  />
                </td>
                <td>{no}</td>
                <td>{task.userid.name}</td>
                <td>{task.userid.email}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  {task.taskstatus ? (
                    <Button variant="success" size="sm" onClick={() => changeTaskStatus(task._id)}>
                      ReAssign
                    </Button>
                  ) : (
                    <Button variant="danger" size="sm">Pending...</Button>
                  )}
                </td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleEdit(task)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(task._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div className="d-flex flex-column align-items-center mt-4">
        <div className="mb-2">
          <strong>Page {currentPage} of {totalPages}</strong>
        </div>

        <nav>
          <ul className="pagination flex-wrap justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
            </li>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
              .map((page, i, arr) => (
                <>
                  {i > 0 && page - arr[i - 1] > 1 && (
                    <li className="page-item disabled" key={`ellipsis-${page}`}>
                      <span className="page-link">...</span>
                    </li>
                  )}
                  <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                  </li>
                </>
              ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
            </li>
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>

      {/* Assign Modal */}
      <Modal show={showAssignModal} onHide={() => setShowAssignModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assign New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAssignSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Select User</Form.Label>
              <Form.Select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                required
              >
                <option value="">-- Choose --</option>
                {allUsers.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleAssignInput}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                onChange={handleAssignInput}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Completion Day</Form.Label>
              <Form.Control
                type="text"
                name="complday"
                onChange={handleAssignInput}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskDetail;
