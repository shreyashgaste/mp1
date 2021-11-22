import React,{useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom';
// import { UserContext } from '../App';

const Login = () => {
    // const {state, dispatch} = useContext(UserContext);
    const[email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const history=useNavigate();
   
    const loginUser = async (e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000/signin', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ email,password})
        });

        const data = await res.json();
        console.log(data);
        if(res.status === 400 || !data){
            window.alert("Invalid credentilas");

        }else{
            sessionStorage.setItem("userEmail", email);
            // dispatch({type:'USER', payload:true});
            window.alert("login successful");
            console.log("login successful");
            history("/home1");
        }
        
    }
    return (
        <>
           
            <main>
                <div className="container">
                    <div className="wrapper">
                        <div className="title"><span>Login Form</span></div>
                        <form method="POST">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <input type="email" name="email"
                                    id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" required />
                            </div>
                            <div className="row">
                                <i className="fas fa-lock"></i>
                                <input type="password"  name="password"
                            id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" required />
                            </div>
                            {/* <div className="pass"><a href="#">Forgot password?</a></div> */}
                            <div className="row button">
                                <input type="submit" value="Login" onClick={loginUser} />
                            
                            </div>
                            <div className="signup-link">Don't have account? <a href="/signup">Signup now</a></div>
                        </form>
                    </div>
                    <br />
                    <br /><br />
                    <br /><br />
                    <br /><br />

                </div>

            </main>
        </>
    )
}


export default Login
