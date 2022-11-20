var express = require("express")
var mongoose = require("mongoose")
var user = require("./user.js")
var doctor = require("./doctorAvailability.js")
const Schema = mongoose.Schema;

const doctorAppointmentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    doctor_id: {
        type: Schema.Types.ObjectId,
        ref: 'doctor'
    },
    date: {
        type: String,
        required: true
    },
    start_time: {
        type: Number,
        required: true
    },
    end_time: {
        type: Number,
        required: true
    },
})

const DoctorAppointment = new mongoose.model("doctorAppointment",doctorAppointmentSchema)
module.exports = DoctorAppointment