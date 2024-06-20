const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../../models/User/userModel");
const AppointmentList = require("../../models/User/AppointmentModel");

const appointmentList = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token } = req.body;

  if (!input || !token) {
    return res.status(400).json({ message: "Input and token are required" });
  }

  try {
    const user = await User.findOne({ input }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const appointmentList = await AppointmentList.find({ user: user._id });

    res.status(200).json({
      success: true,
      appointmentList: appointmentList,
      message: "Appointment List retrieved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const createAppointmentList = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, appointmentListData } = req.body;

  if (!input || !token || !appointmentListData) {
    return res.status(400).json({ message: "Input, token, and appointment list data are required" });
  }

  try {
    const user = await User.findOne({ input }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newAppointmentList = new AppointmentList({
      user: user._id,
      ...appointmentListData
    });

    await newAppointmentList.save();

    res.status(201).json({
      success: true,
      message: "New appointment list created successfully",
      newAppointmentList: newAppointmentList,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { appointmentList, createAppointmentList };
