import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, } from 'mdbreact';
import './menuapp.css'

const Menuapp = () => {
  return (
    <MDBCol style={{ maxWidth: "25rem", marginLeft: "100px", marginTop: "80px"}}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
          waves />
        <MDBCardBody>
          <MDBCardTitle>Fried Vegetable Rice</MDBCardTitle>
          <MDBBtn href="#" style={{background: "#818181"}}>
          <i className="fas fa-plus-square plat"></i>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      
  )
}

export default Menuapp;