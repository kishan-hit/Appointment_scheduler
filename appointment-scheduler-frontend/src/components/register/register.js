import React,{useState} from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () =>{

    const navigate = useNavigate();

    const[user,setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name,email,password,reEnterPassword} = user
        if(name && email && password && (password===reEnterPassword)){
            axios.post("http://localhost:8000/register",user)
            .then(res=>{
                console.log(res);
            }).error((err)=>{
                console.log(err);
            })
        }
        else{
            alert("Invalid")
        }
    }
    
    return(
        <div className="register">
        {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="your name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="your email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="your password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/login")}>Login</div>
        </div>
    )
}

export default Register;