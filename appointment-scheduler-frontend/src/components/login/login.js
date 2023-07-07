import React,{useState} from "react";
import "./login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ({setLoginUser}) =>{

    const navigate = useNavigate();
    

    const[user,setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login = () => {
    //     axios.post("http://localhost:8000/newuser/login",user)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         localStorage.setItem('user', JSON.stringify(res.data.user));
    //         console.log(res.data)
    //         if(res.data.user.role=="user"){
    //             navigate("/user-registration")
    //         }else{
    //             // const ru = await axios.get(`http://localhost:8000/newuser/isRegistered/${user.email}`)
    //             if(ru.data){
    //                 console.log(ru.data);
    //                 navigate("/doctor-registration")
    //             } else{
    //                 navigate("/doctor-registration")
    //             }
    //         }
    //     });
    // }

    async function login(){
        const res = await axios.post("http://localhost:8000/newuser/login",user);
        alert(res.data.message)
            setLoginUser(res.data.user)
            localStorage.setItem('user', JSON.stringify(res.data.user));

            if(res.data.user.role=="user"){
                const ru = await axios.get(`http://localhost:8000/newuser/isRegistered/${user.email}`)
                if(ru.data){
                    navigate("/user-home")
                } else{
                    navigate("/user-registration")
                }
            }else{
                const ru = await axios.get(`http://localhost:8000/newuser/isRegistered/${user.email}`)
                if(ru.data){
                    navigate("/doctor-home")
                } else{
                    navigate("/doctor-registration")
                }
            }
    }

    return(
        <div className="main">
            <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div>
        </div>
        </div>
    )
}

export default Login;

