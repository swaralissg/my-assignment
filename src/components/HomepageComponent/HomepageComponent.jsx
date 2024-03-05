
import React from 'react'
import './HomepageComponent.css'
import { useState } from "react"
import UserProfilesComponent from '../UserProfilesComponent/UserProfilesComponent'
import {BsGrid1X2Fill, BsGearFill, BsPeopleFill,BsReverseLayoutTextSidebarReverse, BsFillLightningFill} from 'react-icons/bs';
import logo1 from '../assets/mylogo1.svg'
import { Link } from 'react-router-dom';

function HomepageComponent() {

    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([])

    return (
        <>
            <div className='page'>
                <div className='sideBar'>
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <div id='sidebar' style={{ background: "#737ccf" }} className="col-auto col-md-5 px-sm-2 px-0">
                                <div id='sidebar-content' className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                    <div href="/" className="d-flex align-items-center">
                                        <img className='ms-1 d-none d-lg-inline' id="dashboard-logo" src={logo1} alt="" />
                                    </div>
                                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                                        <li>
                                            <Link to={'/homePage'}  id="nav-link" href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle"><BsGrid1X2Fill className='icon' />
                                                <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-lg-inline">Dashboard</span> </Link>
                                        </li>
                                        <li>
                                            <Link to={'/userProfiles'} id="nav-link" href="#" className="nav-link px-0 align-middle"> <BsPeopleFill className='icon' />
                                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-lg-inline">User Profiles</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/toDoList'} id="nav-link" data-bs-toggle="collapse" className="nav-link px-0 align-middle "><BsReverseLayoutTextSidebarReverse className='icon' />
                                                <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-lg-inline">To Do List</span></Link>

                                        </li>
                                        <li>
                                            <Link to={'/weather'} id="nav-link" style={{ width: "max-content" }} href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle"><BsFillLightningFill className='icon' />
                                                <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-lg-inline">Weather Statistics</span> </Link>
                                        </li>
                                        <li>
                                            <a id='settings-nav-item' href="#" className="nav-link px-0 align-middle"><BsGearFill className='icon' />
                                                <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-lg-inline">Settings</span> </a>
                                        </li>
                                    </ul>
                                    <hr />
                                    <div className="dropdown pb-4">
                                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                            <li><a className="dropdown-item" href="#">New project...</a></li>
                                            <li><a className="dropdown-item" href="#">Settings</a></li>
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id='dashboard-content' className="col py-3">
                                <div className='navigation-bar'>

                                    <nav className="navbar navbar-expand-lg navbar-light">
                                        <a className="navbar-brand" href="#">Home</a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>

                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <a className="nav-link" href="#">Marketing<span className="sr-only">(current)</span></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Business</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        About Us
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a className="dropdown-item" href="#">Our Origin</a>
                                                        <a className="dropdown-item" href="#">Our Roots</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Contact</a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <form className="form-inline my-2 my-lg-0">
                                                <input style={{ border: '1px solid #8888e5' }} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn btn-outline-success my-2 my-sm-0" id="nav-search-button" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </nav>
                                </div>

                                <div id="homepage-body" className='container-fluid'>
                                    <UserProfilesComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageComponent



