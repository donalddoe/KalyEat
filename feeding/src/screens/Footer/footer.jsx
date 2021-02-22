
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'
    



const footer = () => {
  return (
        <MDBFooter color="gray" className="font-small pt-50 mt-4 footer">
    
          <MDBContainer className="text-center text-md-left">
            <MDBRow className="text-center text-md-left mt-3 pb-3">
              <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Get Started</h6>
                <p>
                  <a href="#!">Careers</a>
                </p>
                <p>
                  <a href="#!">Blog</a>
                </p>
                <p>
                  <a href="#!">News & Events</a>
                </p>
                <p>
                  <a href="#!">FAQ</a>
                </p>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Menu</a>
                </p>
                <p>
                  <a href="#!">Login</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                <p>
                  <i className="fa fa-phone mr-3" /> +233 24 0000 000
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> info@gmail.com
                </p>
                <p>
                  <i className="fa fa-home mr-3" /> Adabraka, Accra
                </p>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="8" lg="8">
                <p className="text-center text-md-left grey-text">
                  &copy; {new Date().getFullYear()} Copyright:{" "}
                  <a href="#"> KALYEAT </a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="4" className="ml-lg-0">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      );
    }
    
export default footer;
