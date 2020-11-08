import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import image from './IMG3.jpg';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Grid from '@material-ui/core/Grid';

// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
class Checkout extends Component {
  state = {
    name: '',
    email: '',
   message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'glorehoney@gmail.com',
      name : name,
      email: email,
      message: message,
     }
     emailjs.send(
      'service_ni63u3d',
      'test',
       templateParams,
      'user_SZ0p8Gqu4DlfLSrZeX2Yw'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (

      <>
        {/* <Layout> */}
      {/* <div  className = "col-10 mx-auto col-md-4 my-4" className ="img-fluid">
      <img src={image} style={{width:555}} />
        </div>
         */}
         {/* <SplitPane
    split="vertical"
  > */}
         <br></br>
         
         <div style={{width:1500}}> 
         <Grid container spacing={3}>  
         <Grid item xs={1}/>
         <Grid item xs={5}>
           
     <h1>  <img src={image} style={{width:580}} /></h1>
        </Grid> 
        <Grid item xs={2}/>
        <Grid item xs={4}>
        <h1 className=" ">Contact Us</h1>
             <hr style={{borderColor: "#367310",width:"90"}}></hr>
             <h6>Say Hello!</h6>
         
<FormGroup controlId="formBasicName" >
              <Label className="text-muted" >Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder=""
              />
            </FormGroup>
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

        
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                placeholder="optional"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>     
 <Button variant="primary" type="submit">
          Submit
            </Button>
          &nbsp;&nbsp;<a className="btn btn-social-icon " href="https://www.facebook.com/Mullai-Thean-107066021129447"> <i className="fa fa-facebook fa-lg"></i></a>
          <a className="btn btn-social-icon " href="https://www.instagram.com/mullaithean/"><i className="fa fa-instagram fa-lg" ></i></a>
       
        
          </Form>
         
                 
        </Grid>
        <Grid item xs={1}/>
        </Grid>
         
          </div> 
      </>
      
    )
  }
}
export default Checkout


