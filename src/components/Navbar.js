import React from 'react'
import PropTypes from 'prop-types'
import {FaGgCircle} from 'react-icons/fa';
// import {a} from "react-router-dom"

export default function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <span className="large ms-4"><FaGgCircle/></span>
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <span className="flash2 mx-3"><FaAngellist/></span>
        <li className="nav-item">
          <a className="nav-a" href="/about">{props.textMe}</a>
        </li> */}
       
      </ul> 
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label plus" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    textMe: PropTypes.string.isRequired
    }
Navbar.defaultProps = {
    title:'Set title here',
    textMe:'About text here'
};