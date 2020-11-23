import React from 'react';
import './AdminLogin.css';
import { Link } from "react-router-dom";

function AdminLogin() {

    let pass;

    const handlePassword = e => {
        e.preventDefault()
        //return pass = e.target.value
        return e.target.value
    }
    alert(handlePassword)
    const handleSubmit = e => {
        e.preventDefault();
            if({handlePassword} === 123){
                alert('correct')
            } else{
                alert('wrong')
            }
    }

    return (
        <div>
            <Link to="/">
               <div className="adminlogin__logo">
                    Trohan
               </div>
            </Link>
            <div className="adminlogin">
                <h4>Login As Admin</h4>
                <form>
                        <label>Password</label>
                        <input type="password"  placeholder="enter password here..." onChange={handlePassword} 
                        />
                        <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
