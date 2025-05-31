import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"
import x from "../assets/cancel_svgrepo.com.png"
import "./SignUp.css"
import arrow from "../assets/arrow.png"
import neon from "../assets/Image_fx (9)-Photoroom 2.png"
const SignUp = () => {
  return (
    <>
    <div className="maincontainer">
    <div className="topdiv">
           <img src={logo} alt="" />
           <button className="btn"> <img src={x} alt=""/></button>
      </div>

      <div className="getstarteddiv">
          <p className="get">Getting Started</p>
          <div className="startdiv">
              <p className="create">Create an account to earn as you learn</p>
              <p className="track"><img src={arrow} alt="" />Track your journey</p>
              <p className="track"><img src={arrow} alt="" />Unlock new levels</p>
              <p className="track"><img src={arrow} alt="" />Gain real rewards as you explore the world of Web3</p>
              <Link className="link" to="">Next</Link>
          </div>
      </div>

      <img src={neon} alt="" className="neon"/>
    </div>
    </>
  )
}

export default SignUp