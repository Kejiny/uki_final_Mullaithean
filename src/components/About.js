import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import IMG from './IMG2.jpg';

export default class About extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {      
                    
                     (value) => {

                        return (
                            <div className="container py-5">
                                {/*title */}
                                <div className="row">
                                    <div className="col-20 mx-auto text-center text-slanted text-blue my-15">
                                    <h1>
                                        {/* {title} */}
                                    </h1>
                                    </div>
                                </div>
                            
                                    <div className = "row">
                                    <div className = "col-20 mx-auto col-md-6 my-7">
                                    {/* <img src={img} className ="img-fluid" alt="product"/> */}
                                    </div> 
                                {/* product text */}
                                    <div className >
                                      <img src={IMG} style={{width:400}}></img>
                                      <img src={IMG} style={{width:400}}></img>
                                        <h4 className = "text-blue">
                                            <strong>
                                                Our Journey...
                                            </strong>
                                        </h4>
                                        <p className = "text-capitalize font-weight-bold mt-3 mb-0">
                                           
                                            <p className = "text-muted lead"  style={{fontFamily:"fantasy",color:"black"}}>
                                            {/* {info} */}
                                        <strong>  Mullai Thean.. is an amazing nectar from nature! Our honey is special and rare as we honey collectors risk our lives to go down to the dense forest around twelve thousands of meters and stay about four to five days to collect the honey. And the best thing is we collected from areas that are populated with a variety of medicinal plants.    .
                                        </strong>    </p>
                                            <div>
                                            {/* for buttons */}
                                            <Link to = '/productlist'>
                                                <ButtonContainer>
                                                    back to store
                                                </ButtonContainer>
                                            </Link>
                                           

                                            </div>
                                        </p>

                                        </div>  
                                    </div>
                                 {/* end of product info */}



                            </div>
                        );

                    }
                }
            </ProductConsumer>
        )
    }
}


