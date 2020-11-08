import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { Container, Grid, Segment } from "semantic-ui-react";
import {ButtonContainer} from './Button';
import logo from './Logo2.png';
import { Icon } from 'semantic-ui-react'

function Footer(props) {
    return(
        <div className="footer">
             <img src={logo} alt="store"  style={{width:120}}className="navbar-brand"/>
            <div className="container">
                  <div className="float-left" style={{fontFamily:"fantasy"}}>
               
                Mullai thean is a online store to <br></br>deliver you the nature's goodness while <br></br>preserving it.
we produce bee honey that has been extracted locally
<br></br> <br></br>             
<div className="float-left">© Copyright 2020 Mullai Thean</div>
               
              
                        
                                 
                            </div> 

              <div className="float-right" style={{fontFamily:"fantasy"}}>
                <h5>Our Info</h5>
                          
                <Link to="/home" className="link">Home</Link><br></br>
                         <Link to="/about" className="link" >About Us</Link><br></br>
                      
                          <Link to="/contact" className="link">Contact Us</Link><br></br>
                          <Link to="/productlist" className="link"> Shop</Link><br></br>
                  

                     
                </div>
              <div>
                  
              </div>
                <div className="row justify-content-center" style={{fontFamily:"fantasy"}}>             
                    <div className="col-auto">
                    <h5>Contacts</h5>
                    <i className="fa fa-phone fa-small"></i> 0779996621 <br></br>
                    <i className="fa fa-pen fa-small"  ></i><a href="mailto:mullaithean.shop@gmail.com"   className="link">mullaithean.shop@gmail.com</a>
                     <br></br> <br></br>   
                   
                       <a className="btn btn-social-icon " href="https://www.facebook.com/Mullai-Thean-107066021129447"><i className="fa fa-facebook fa-lg"></i></a>
                
                   <a className="btn btn-social-icon " href="https://www.instagram.com/mullaithean/"><i className="fa fa-instagram fa-lg" ></i></a>
                
                     
                    <br></br><br></br><br></br><br></br>
       
                       
                       
                        
      
  </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Footer;




