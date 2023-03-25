import React, {useState, useEffect} from "react"
import '../css/Signup.css'

function Signup({ setUser }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    
   


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
            }
            else {
                res.json().then((err) => alert(err.errors));
            }
        })
        
    }
    return(
        <div className="body">
           <div className="form">
           <form onSubmit = {handleSubmit}>
           <h1>Don't have an account?</h1>
        <h5>Create an account with your email and password</h5>
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

        

        
        <button type="submit" className="btn btn-success">Create Account</button>
        </form>
           </div>
        </div>
    )
}

export default Signup;