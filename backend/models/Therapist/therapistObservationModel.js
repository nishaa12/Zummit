const mongoose = require("mongoose");

const therapistObservationModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title of observation"],
    max : 50

    },

    clientId : {
        type: String,
        required: [true, "Please provide clientId of observation"]
    },

    description : {
        type: String,
        required: [true, "Please provide description of observation"]
    },
    dateModified: {
        type: Date,
        default: Date.now,
    }
})

const TherapistObservation = mongoose.model("therapistObservation", therapistObservationModel);
module.exports = TherapistObservation;
