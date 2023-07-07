import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import "./userStyle.css"
import "../Doctor/doctor.css"
import { useNavigate } from 'react-router-dom'

const UserHome = () => {
    const [doctors, setdoctors] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function getDoctor() {
            const res = await axios.get("http://localhost:8000/doctor/get-doctor")
            // console.log(res)
            if(res.data){
                setdoctors(res.data.doctors)
                console.log(res.data.doctors);
            }else{
                alert("server error")
            }
        }
        getDoctor()
    }, [])
    const bookAppointment = (email)=>{
        navigate("/booking",{
            state : {
                email : email
            }
        })
    }
    // console.log(doctors);
    return (
        <div>
            {
                doctors.map((doctor)=>{
                    return <div className='patientdiv'>
                        <div>Name : {doctor.name}</div>
                        <div>Specialist : {doctor.specialist}</div>
                        <div>Degree : {doctor.degree}</div>
                        <div>Experience : {doctor.experience}</div>
                        <div>Adress : {doctor.address}</div>
                        <div className='booking-btn' onClick={()=>{bookAppointment(doctor.email)}} className='patientdetaildiv'>Book Apointment</div>
                    </div>
                })
            }
        </div>
    )
}

export default UserHome