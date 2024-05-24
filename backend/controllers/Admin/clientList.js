const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken"); 
const Client = require("../../models/Admin/adminClientModel");
const { validationResult } = require('express-validator');

const clientsList = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { adminEmail, token } = req.body;

    try {
      const admin = await Admin.findOne({ email: adminEmail });
      if (!admin) {
        return res.status(404).json({ message: "Client List not found" });
      }

  
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedToken.id!== admin._id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const clientsLists=await Client.find({});

      res.status(200).json({
        success: true,
        clients:clientsLists,
        message: "Client list Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

const createClient = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    adminEmail,
    token,
    clientId,
    clientName,
    therapistName,
    lastSession,
  } = req.body;

  if (
    !adminEmail ||
    !token ||
    !clientId ||
    !clientName ||
    !therapistName ||
    !lastSession
  ) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await Admin.findOne({ email: adminEmail });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== admin._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newClient = new Client({
      clientId,
      clientName,
      therapistName,
      lastSession,
    });

    await newClient.save();

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      appointment: newClient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports= {clientsList , createClient};