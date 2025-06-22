// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import BackEndUrl from '../config/BackendUrl';
// import { useState } from 'react';
// import axios from 'axios';

// const CreateUser = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [designation, setDesignation] = useState("");

//    const handleSubmit=async(e)=>{
//         e.preventDefault();
//           let api=`${BackEndUrl}/admin/usercreation`;
//         try {
//              const response= await axios.post(api, {name:name, email:email, designation:designation})
//              console.log(response);
//         } catch (error) {
            
//             console.log(error);
//         }
//    }

//     return (
//         <>
//             <h2> Create New User</h2>
//             <Form style={{ width: "300px" }}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Enter name</Form.Label>
//                     <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />

//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Select Designation</Form.Label>

//                     <Form.Select aria-label="Default select example" value={designation} onChange={(e)=>setDesignation(e.target.value)}>
//                         <option>--Select Designation--</option>
//                         <option>Programmer</option>
//                         <option>Developer</option>
//                         <option>Designer</option>
//                         <option>DataBase Developer</option>
//                         <option>Analyst</option>
//                         <option>Coder</option>
//                     </Form.Select>
//                 </Form.Group>

//                 <Button variant="primary" type="submit" onClick={handleSubmit}>
//                     Submit
//                 </Button>
//             </Form>

//         </>
//     )
// }

// export default CreateUser;


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackEndUrl from '../config/BackendUrl';
import { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const api = `${BackEndUrl}/admin/usercreation`;
        try {
            const response = await axios.post(api, {
                name: name,
                email: email,
                designation: designation
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="createuser-wrapper">
            <h2 className="createuser-title">Create New User</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDesignation">
                    <Form.Label>Select Designation</Form.Label>
                    <Form.Select
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    >
                        <option value="">--Select Designation--</option>
                        <option>Programmer</option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>DataBase Developer</option>
                        <option>Analyst</option>
                        <option>Coder</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" className="createuser-submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateUser;
