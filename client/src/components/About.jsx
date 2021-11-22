import React ,{useEffect, useState}from 'react';
// import ReactDOM from 'react-dom';

import {
  useNavigate
} from "react-router-dom";

const About = () => {
    const history = useNavigate();
    // const initialData = {name:"Dattatray",phone:"9325924492",email:"dattareve@gmail"};
    const [userData, setuserData] = useState({});


    const callAboutPage = async()=>{
        try{
            const res = await fetch('http://localhost:5000/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Conent-Type":"application/json",
                    credentials:"include"
                }
            });

            const data = await res.json();
            console.log(data);
          
            setuserData(data);
            if(!res.status === 200)
            {
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
            history("/login");
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
            <main>
                <form method="GET"/>
                <div className="cont">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU" align="left" alt="" />
                    <div className="card1">
                    <form method="GET">
                        <b>Name: </b><i> {userData.name}</i><br />
                        <b>Phone: </b><i> {userData.phone}</i><br />
                        <b>Email: </b><i> {userData.email}</i><br />
                    </form>   
                    </div>
                </div>
                <form/>
            </main>
        </>
    )
}

export default About
