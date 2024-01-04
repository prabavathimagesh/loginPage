import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  function loginButton(){
    let userName=document.getElementById("username").value
    let password=document.getElementById("password").value

    let loginObject={
      userName:userName,
      password:password
    }
   
   
    if(userName===""){
      alert("plese fill UserName")
    }
    else if(password===""){
      alert("plese fill password")
    }
    else{
      let string=JSON.stringify(loginObject)
      localStorage.setItem(document.getElementById("username").value,string)
      alert("Welcome"+" "+userName+" "+"!")
      window.location.href='/SingupPage'
    }
  }

  return (
    <>
      <section className="loginContainer ">
      <div className="form-Container">
        <h2>
          Log<span>i</span>n
        </h2>
        <form>
          <div className="inputBox">
            <input type="text" id="username" required />
            <label>UserName</label>
          </div>
          <div className="inputBox">
            <input type="password" id="password" required />
            <label>password</label>
          </div>
          <div>
            <button type="submite" id="btn" onClick={()=>loginButton()}>
              Login
            </button>
          </div>
          <div className="paraDiv">
            <p>
              Don't have an account?
              <Link to={"/SingupPage"} className="singuplinke">
                {" "}
                Singup{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
      </section>
    </>
  );
}
