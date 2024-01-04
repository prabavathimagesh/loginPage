import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Singup() {

  function singuppages(){
    let userNameS=document.getElementById("namesingup").value 
    let pass=document.getElementById("passwordsingup").value
    let conpass=document.getAnimations("confornpassword").value

    let sinObject={
      userNameS:userNameS,
      pass:pass,
      conpass:conpass
    }
    if(userNameS===""){
      alert("")
    }
    else if(pass===""){
      alert("plse fill password")
    }
   if(pass===conpass){
    if(pass===""){
      alert("password is not a correct!")

    }
    }
    else{
      let singLocal=JSON.stringify(sinObject)
      localStorage.setItem(document.getElementById("namesingup").value,singLocal)
      alert("Welcome"+" "+userNameS+" "+"!")
    }
  }
  return (
    <>
      <section className="loginContainer">
      <div className="form-Container">
        <h2>
          Sin<span>g</span>up
        </h2>
        <form>
          <div className="inputBox">
            <input type="text" id="namesingup" required />
            <label>UserName</label>
          </div>
          <div className="inputBox">
            <input type="password" id="passwordsingup" required />
            <label>password</label>
          </div>
          <div className="inputBox">
            <input type="password" id="confornpassword" required />
            <label>Conform password</label>
          </div>
          <button type="submite" id="btn" onClick={()=>singuppages()}>
            Login
          </button>
          <div className="paraDiv">
            <p>
              Don't have an account?
              <Link to={"/"} className="singuplinke">
                {" "}
                Login{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
      </section>
    </>
  );
}
