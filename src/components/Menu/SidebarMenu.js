import React from 'react'
import tktLogo from "../../media/tktLogo.png"
import { sideBarData  } from './SidebarData'
import  profil  from "../../media/profil.png"
import './SidebarMenu.css';

export default function SidebarMenu() {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sideMenu">
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-5 d-none d-sm-inline"><img src={tktLogo} alt="" /></span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        {sideBarData.map((val,key)=>{
         return   <li className="nav-item">
                <a href={val.link}className="nav-link align-middle">
                <img src={val.icon} alt="aa"/> <span className="ms-1 d-none d-sm-inline">{val.title}</span>
                </a>
            </li>
           })}
        </ul>
        <hr/>
        
        <div className="dropdown pb-4 profil">
            <a href="#" className="d-flex align-items-center  text-decoration-none " >
                <img src={profil} alt="hugenerd" width="30" height="30" className="rounded-circle" />
               
                <span classNameName="d-none d-sm-inline mx-1">Sophie L.</span>
                
            </a>
           
        </div>
    </div>
</div>
  )
}
