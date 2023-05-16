import React from 'react'
import '../Styles/Navbar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from '../logo.svg'
import Content from './Content';
import Form from './Form';
const Navbar = () => {
  return (
    <div className="navbarmain-three">
      <div className="main">
        <div className="navLeft">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <p className="option">
            Courses <RiArrowDropDownLine />
          </p>
          <p className="option">
            Programs <RiArrowDropDownLine />
          </p>
        </div>
        <div className="navRight">
          <AiOutlineSearch />
          <p>Login</p>
          <button className="btn">JOIN NOW</button>
          {/* <CustomButton text="JOIN NOW" className="btn" /> */}
        </div>
      </div>
      <div className="content-flex-box">
        <Content />
        <Form />
      </div>
    </div>
  );
}

export default Navbar;