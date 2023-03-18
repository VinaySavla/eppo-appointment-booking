import React from "react";
import Navibar from "../navbar";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
//import Button from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';




export default function ReviewForm() {
  return (
    <>
    <Navibar loggedIn={true}/>
    <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <div className="text-center mb-4 pb-2">
            <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
          </div>
          <MDBCard>
            <MDBCardBody>
                  
                    <MDBRow className="d-flex justify-content-center">
                      <MDBCol lg="10" xl="8">
                        <MDBRow>
                          <MDBCol
                            lg="4"
                            className="d-flex justify-content-center"
                          >
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                              className="rounded-circle shadow-1 mb-4 mb-lg-0"
                              alt="woman avatar"
                              width="150"
                              height="150"
                            />
                          </MDBCol>
                          <MDBCol
                            md="9"
                            lg="7"
                            xl="8"
                            className="text-center text-lg-start mx-lg-0"
                          >
                            <h4 className="mb-4">
                              Lisa Cudrow - Graphic Designer
                            </h4>
                            <form>
                              
                              <MDBInput wrapperClass='mb-6' textarea id='form4Example3' rows={60} label='Message' />

                              

                              <Button type='submit' className='mb-4'>
                                Submit
                              </Button>
                            </form>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                 
                  
              
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4 pt-2">
            <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
    </>
  );
}