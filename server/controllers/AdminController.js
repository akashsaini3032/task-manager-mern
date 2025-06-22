


const AdminModel = require("../models/adminModel");
const UserModel = require("../models/userModel");
const TaskModel = require("../models/taskModel");
const userPassword = require("../middlewares/randomPassword");
var nodemailer = require("nodemailer");
const adminEmail = process.env.ADMIN_EMAIL;
const adminPass = process.env.ADMIN_PASS;

// Existing controllers (unchanged)
const adminLogin = async (req, res) => {
  const { adminid, password } = req.body;

  try {
    const admin = await AdminModel.findOne({ id: adminid });
    if (!admin) {
      return res.status(401).send({ msg: "Invalid User Id" });
    }

    if (admin.password != password) {
      return res.status(401).send({ msg: "Invalid Credentials!" });
    }

    res.status(200).send({ admin: admin, msg: "Login Succesfully!" });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { name, email, designation } = req.body;
  const UserPass = userPassword();
  const User = await UserModel.create({
    name: name,
    email: email,
    designation: designation,
    password: UserPass,
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adminEmail", // mask your actual email
      pass: "adminPass", // mask your actual password
    },
  });

  var mailOptions = {
    from: "adminEmail", // sender email
    to: email,
    subject: "Sending Email by Admin",
    text: `Welcome :  ${name}!\nYour Password : ${UserPass} \nYou can Login With This Password `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Succ sent: " + info.response);
      res.send(info.response);
    }
  });
};

const showUserData = async (req, res) => {
  try {
    const User = await UserModel.find();
    res.status(201).send(User);
  } catch (error) {
    console.log(error);
  }
};

const assignTask = async (req, res) => {
  const { title, description, complday, userid } = req.body;

  try {
    const Task = await TaskModel.create({
      title: title,
      description: description,
      compday: complday,
      userid: userid,
    });
    res.status(201).send({ msg: "User Task Succesfully Assign!" });
  } catch (error) {
    console.log(error);
  }
};

const taskDetail = async (req, res) => {
  try {
    const Task = await TaskModel.find().populate("userid");
    res.status(200).send(Task);
  } catch (error) {
    console.log(error);
  }
};

const changeTaskStatus = async (req, res) => {
  const { id } = req.query;
  try {
    await TaskModel.findByIdAndUpdate(id, {
      taskstatus: false,
    });
    res.status(201).send("Succesfully updated!!!");
  } catch (error) {
    console.log(error);
  }
};

// ✅ NEW: Edit/Update Task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, compday } = req.body;

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        compday,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ msg: "Task not found" });
    }

    res.status(200).send({ msg: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await TaskModel.findByIdAndDelete(id);
    res.status(200).send({ msg: "Task deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Error deleting task" });
  }
};


module.exports = {
  adminLogin,
  createUser,
  showUserData,
  assignTask,
  taskDetail,
  changeTaskStatus,
  updateTask,
  deleteTask 
};
