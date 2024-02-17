import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                {/* <link className='navbar-fluid'  to="/">{props.title}</link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className='nav-link' to='/about'>{props.aboutText}</Link> */}
                        <a href="/" className="nav-link disabled" aria-disabled="true">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={()=>(props.toggleMode('primary'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-danger rounded mx-2" onClick={()=>(props.toggleMode('danger'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-success rounded mx-2" onClick={()=>(props.toggleMode('success'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-warning rounded mx-2" onClick={()=>(props.toggleMode('warning'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-light rounded mx-2" onClick={()=>(props.toggleMode('light'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    <div className="bg-dark rounded mx-2" onClick={()=>(props.toggleMode('dark'))} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
                    </div>
                    {/* <div className={`form-check form-switch text-light text=${props.Mode === 'light'?'dark':'light'} `}>
                        <input className='form-check-input' type='checkbox' onClick={()=>{props.toggleMode(null)}}  id='flexSwitchCheckDefault'/> 
                        <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>Toggle Mode</label>
                    </div> */}
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        
        </nav>
    </>
  )
}
