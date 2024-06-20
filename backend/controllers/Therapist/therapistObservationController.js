const asyncHandler = require("express-async-handler");
const TherapistObservation = require("../../models/Therapist/therapistObservationModel")


const therapistObservationLists = asyncHandler(async (req, res) => {
    try {
        const therapistObservation = await TherapistObservation.find({});
        res.status(200).json({
            success: true,
            therapistObservationData: therapistObservation,
            message: "Therapist observation lists "
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

const createTherapistObservationLists = asyncHandler(async (req, res) => {
    const { title, clientId, description, dateModified } = req.body;

    if (!title || !clientId || !description || !dateModified) {
        return res.status(400).json({ message: "Please provide all the filds" });
    }

    try {
        const therapistObservation = new TherapistObservation({
            title,
            clientId,
            description,
            dateModified
        });

        await therapistObservation.save();

        res.status(201).json({
            success: true,
            message: "Therapist Observation created successfully",
            therapistObservationData: therapistObservation
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = {therapistObservationLists , createTherapistObservationLists}
