const asyncHandler = require("express-async-handler");
const therapistScheduleModel = require("../../models/Therapist/therapistSchedule.js");

const therapistScheduleLists = asyncHandler(async (req, res) => {
    try {
        const therapistSchedule = await therapistScheduleModel.find({});
        res.status(200).json({
            success: true,
            therapistGroupData: therapistSchedule,
            message: "Therapist Schedule list "
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


const createTherapistSchedule = asyncHandler(async (req, res) => {
    const { ScheduleDate } = req.body;

    if (!ScheduleDate) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
        const newTherapistSchedule = new therapistScheduleModel({ ScheduleDate: ScheduleDate });
        await newTherapistSchedule.save();
        res.status(201).json({
            success: true,
            message: "Therapist Schedule created successfully",
            therapistTransactionData: newTherapistSchedule
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = { therapistScheduleLists, createTherapistSchedule }
