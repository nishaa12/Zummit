const mongoose = require("mongoose");

const therapistTransactionsModel = mongoose.Schema(
    {
        invoiceNumber: {
            type: Number,
            required: [true, "please add invoice Number"]
        },
        sessionDate: {
            type: Date,
            required: [true, "please add session date"]
        },
        clientName: {
            type: String,
            required: [true, "please add client Name"]
        },
        doctorName: {
            type: String,
            required: [true, "please add doctor Name"]
        },
        Amount: {
            type: Number,
            required: [true, "please add Amount type"]
        },
        Status: {
            type: String,
            required: [true, "please add Status type"]
        }
        
    },
)

const  therapistTransactions = mongoose.model("therapistTransaction", therapistTransactionsModel); 
module.exports = therapistTransactions;