import React, { Component } from 'react'
import {Link} from "react-router-dom";
import logo from './Logo2.png';
import { domainToASCII } from 'url';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import { Button } from 'reactstrap';
//1.15.00 de kaldım
export default class Navbar extends Component{

    render(){
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
              
               <Link to = '/'>
               <img src={logo} alt="store"  style={{width:110}}className="navbar-brand"/>

               </Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                    <Link to = "/" className="nav-link"> <span className="mr-2"  style={{color:'white', fontSize:25,fontFamily:"Roboto", fontStyle:"italic"}}>
                 
                    Mullai Thean</span>
                    </Link>

                   </li>
               </ul>
              
               <Link to='/productlist' className="ml-auto">
                   
                    {/* <span className="mr-2"  style={{color:'white', fontSize:21}}> */}
                    <Button outline color="secondary"  style={{color:'white', fontSize:21, fontFamily:"fantasy"}}>
                       SHOP </Button>
                    {/* </span> */}
                     
                 &nbsp;&nbsp; 
               <Link to='/cart' >
               <Button outline color="secondary"  style={{color:'white', fontSize:21,fontFamily:"fantasy"}}>
                    {/* <span className="mr-2" style={{color:'white',fontSize:21}}>
                   */}
                     CART</Button>
                     &nbsp;&nbsp; 
                   <Link to='/about' className="ml-auto">
                   
                   <Button outline color="secondary"  style={{color:'white', fontSize:21,fontFamily:"fantasy"}}>
                      ABOUT
                 </Button>
                     
                 &nbsp;&nbsp;
                   <Link to='/contact' className="ml-auto" >
                   <Button outline color="secondary"  style={{color:'white', fontSize:21,fontFamily:"fantasy"}}>
                
                  
                      CONTACT
                    </Button>
                    
                 
                   </Link>
</Link>
               </Link>
</Link>


           </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    
}

`;