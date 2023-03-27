import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import '../css/Signup.css'

function Signup({ setUser }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault()

        if (password !== passwordConfirmation) {
            alert("passwords do not match");
            return;
          }

        const newSignup = {
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
        }

            
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newSignup)
        })
        .then((res) => {
            
            if(res.ok) {
                res.json().then((user) => setUser(user));
                navigate(`/login`); 
            }
            else {
                res.json().then((err) => alert(err.errors));
            }
        })
        
    }
    return(
        <div className="body_sign">
           <div className="form">
           <form onSubmit = {handleSubmit}>
           <h2>Don't have an account?</h2>      
        <div className="form-group">

            <label>Username</label>
            <input type="text" 
            required
            name ='username' 
            value = {username}
             className="form-control" 
             placeholder="Enter Preferred Username" 
             onChange ={(e) => setUsername(e.target.value)}/>
        
        </div>

       
        <div className="form-group">
            <label>Password</label>
            <input type="text"
            required
             name ='password'
              value = {password}
               className="form-control"
                placeholder="Enter Your Password"
                 onChange ={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Re-Enter Password</label>
            <input type="text"
            required
             name ='passwordConfirmation'
              value = {passwordConfirmation}
               className="form-control"
                placeholder="Match your password"
                 onChange ={(e) => setPasswordConfirmation(e.target.value)}/>
        </div>
        {/* <h3>Have an Account?</h3> */}
        

        
        <button type="submit" className="btn btn-success">Create Account</button>
        </form>
           </div>
        </div>
    )
}

export default Signup;