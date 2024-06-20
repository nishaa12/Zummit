const mongoose = require("mongoose");

const Appointment = require("../Admin/adminAppointmentModel");

const AppointmentSchema = new mongoose.Schema({
   DoctorName:{
    type: String,
    require: true
   },

   AppointmentTime:{
     type: Date,
     require: true
   },
  Amount:{
    type: Number,
    require: true
  },
 Status:{
  type: String,
  enum: ['Join', 'Upcoming', 'Cancelled'],
  default: 'Pending'
 }
});

const AppointmentsList = mongoose.model('AppointmentList',AppointmentSchema);
module.exports = AppointmentsList;

