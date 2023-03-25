import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";

function Login( {setUser} ){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        const newLogin = {
            username: username,
            password: password,
            
        }
    
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newLogin)
        })
        .then((res) => {
            
            if(res.ok) {
                res.json().then((user) => setUser(user)); 
                navigate(`/`); 
            }
            else {
                res.json().then((err) => alert("Invalid Username or Password"));
                navigate('/signup')
            }
        })
    }

  


    return(
        <>
         <div className="body">
           <div className="form">
           <form onSubmit = {handleSubmit}>
           <h1>Welcome back!!</h1>
        
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

   
        <button type="submit" className="btn btn-success">Login</button>
        </form>
           </div>
        </div>
        </>
    )
}

export default Login;