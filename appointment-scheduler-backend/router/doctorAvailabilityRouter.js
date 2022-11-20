var express = require('express');
var router = express.Router();
var moment = require('moment');
var DoctorAvailability = require("../models/doctorAvailability.js")

router.post("/:duration", (req, res) => {
    const { user_id, start_time, end_time } = req.body;
    let duration = req.params['duration']
    var tduration = Number(duration)
    console.log("duration", typeof (tduration))
    // var ndate = new Date(date);
    // var tdate = ndate.toISOString().substring(0, 10)
    var smtime = moment(start_time); //todays date
    var emtime = moment(end_time);
    var tmtime = moment(start_time);
    var tempend = start_time
    duration = moment.duration(emtime.diff(smtime));
    let minutes = duration.asMinutes();
    minutes = Math.ceil(minutes)
    console.log("minutes", typeof (minutes))
    var rem = minutes % tduration
    console.log(rem)
    if ((rem != 0)) {
        res.send({ "message": "slot cannot be divided for gven time frame" })
    } else {
        var stime = start_time
        console.log(stime)
        console.log(tempend)
        console.log(end_time)
        while (emtime.diff(smtime) > 0) {

            smtime = tmtime.add(1, "minutes");

            let starttimetemp = smtime.toISOString()

            tmtime = smtime.add((tduration - 1), "minutes")

            let endtimetemp = tmtime.toISOString();

            // stime = +tempend + 1;
            // tempend = +stime + +duration - 1
            // console.log("start time", starttimetime)
            // console.log("end time", endtimetemp)

            // DoctorAvailability.findOne({ user_id }, (err, doctorAvailability) => {
            //     if (doctorAvailability) {
            //         res.send({ message: "Already registered" })
            //     }
            //     else {
                     
            //         })
            //     }
            // })
            let doctorAvailability = new DoctorAvailability({
                user_id,
                start_time : starttimetemp,
                end_time : endtimetemp
            })
            doctorAvailability.save()
        }
        res.send({ "message": "done" })
    }
})

router.get('/', async function (req, res) {
    const users = await DoctorAvailability.find({ user_id: "634e63ae22fe7ed6151489d9" });
    res.send({
        "users": users
    })
});

module.exports = router