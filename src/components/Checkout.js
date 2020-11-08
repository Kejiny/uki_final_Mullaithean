import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import image from './IMG3.jpg';

import {Link} from "react-router-dom";
import { Checkbox,Icon } from "semantic-ui-react";
import Grid from '@material-ui/core/Grid';
import { Alert } from 'reactstrap';

// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

class Checkout extends Component {
 
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    data: localStorage.getItem('items'),
  }
  
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message,mobile,address } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'glorehoney@gmail.com',
      email :email,
      name:name,
      subject: subject,
      message: message,
      mobile:mobile,
      address : address
     }
     emailjs.send(
      'service_ni63u3d',
      'test2',
       templateParams,
      'user_SZ0p8Gqu4DlfLSrZeX2Yw'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      mobile : '',
      address:''
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
render() {
    return (
      

      <>
        {/* <Layout> */}
        <br></br>
        
     <div className="">
      <Grid container spacing={3}>
        <Grid item xs style={{backgroundColor:"#acb5ae"}}>
        <div className="float-right">
         {/* <h3>Shopping Cart</h3>
         <Link>Back to shop</Link> */}
         <hr></hr>
         {/* <div>
         <img src={image} style={{width:80}} />
         <label>Name</label> <label>price</label>
         <label>1</label>
         </div> */}
         <div >
         {/* <Grid container spacing={3}>
        <Grid item xs>
        <img src={image} style={{width:80}} />
        </Grid>
        <Grid item xs>
          <p>{this.data} hj</p>
        <label>Name</label> 
       <span>1</span>
        </Grid>
        <Grid item xs className="float-right">
        <label>price</label>
        </Grid>
      </Grid>
      <hr></hr>
      <h2>Total Price:</h2> */}
    </div>
      {/* <img src={image} style={{width:555}} /> */}
        </div>
        </Grid>
        <Grid item xs={8} style={{backgroundColor:"#acb5ae"}}>
        <br></br>
         <div className = "col- mx-auto col-md-5 col-lg-4 my-7  " > 
          <h1 className="p-heading1">Check out</h1>
          <br></br>
          <h4>Payment Information</h4><br></br>
          <Checkbox  defaultChecked /> <h6><b>Cash On Delivery</b></h6>
            <hr></hr>
         
            <h5>Billing Address</h5>
            <hr></hr>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted" color="#000000">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder=""
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder=""
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Mobile Number</Label>
              <Input
                type="text"
                name="mobile"
                className="text-primary"
                value={this.state.mobile}
                onChange={this.handleChange.bind(this, 'mobile')}
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Address</Label>
              <Input
                type="textarea"
                name="address"
                className="text-primary"
                value={this.state.address}
                onChange={this.handleChange.bind(this, 'address')}
              />
            </FormGroup>
            {/* <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Order Comments</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup> */}
<Button variant="primary" type="submit">
 Place Your Order
            </Button>
         
       
          </Form>
          
          </div>
        </Grid>
       
      </Grid>
     
       
    </div>
      
      <br></br>  
         {/* <SplitPane
    split="vertical"
  > */}
        
          {/* </SplitPane> */}
        {/* </Layout> */}
        
      </>
      
    )
  }
}
export default Checkout