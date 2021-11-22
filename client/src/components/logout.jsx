import React, { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../App';
const Logout = () =>{
    const {state, dispatch} = useContext(UserContext);
    const history = useNavigate();
    // promises
    useEffect(()=>{
        fetch('http://localhost:5000/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Conent-Type":"application/json",
                credentials:"include"
            }
        }).then((res)=>{
            dispatch({type:"USER", payload:false});
            history('/login',{replace:true});
            if(!res.status === 200)
            {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
        sessionStorage.clear();
    })

return(

    <>
    <h2>Logout successfully</h2>
    </>
)
}

export default Logout;