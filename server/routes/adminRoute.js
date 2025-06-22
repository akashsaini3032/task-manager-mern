const express = require("express");
const route = express.Router();
const AdminController= require("../controllers/AdminController"); 
route.post("/logincheck", AdminController.adminLogin);
route.post("/usercreation", AdminController.createUser);
route.get("/showuserdata", AdminController.showUserData);
route.post("/assigntask", AdminController.assignTask);
route.get("/taskdetail", AdminController.taskDetail);
route.get("/changetaskstatus", AdminController.changeTaskStatus);

// update
route.put("/updatetask/:id", AdminController.updateTask);
route.delete("/deletetask/:id", AdminController.deleteTask);






module.exports=route;