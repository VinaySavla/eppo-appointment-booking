import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navibar from '../navbar';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBProgress,
  MDBProgressBar,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useLocation, useNavigate } from "react-router-dom";
import { allProfessionalData, allReviewsData, professionalData } from "../../apicalls/users";


export default function ProfilePage() {
  const navigate = useNavigate();
  const {state} = useLocation();
  const data = state.data;
  const expWidth = data.Experience*10;
  const [dateTime, setDateTime] = useState('');


  return (
    <>
    <Navibar loggedIn={true}/>
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer style={{paddingTop:'17vh'}}>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '13vw' }}
                  fluid />

              </MDBCardBody>
            </MDBCard>


            <MDBCard className="mb-10">
                <MDBListGroup flush className="rounded-3">
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-5">

                    <MDBCardText>Charges</MDBCardText>
                    <MDBCardText >Rs. {data.Price}</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
            </MDBCard>
  </MDBCol>
          <MDBCol lg="8" >
            <MDBCard className="mb-4">
              <MDBCardBody style={{paddingBottom:'4vh', paddingTop:'4vh'}}>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.Name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.Email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.MobileNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.Address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Experience</span></MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>In years</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={expWidth} valuemin={0} valuemax={100} />
                    </MDBProgress>


                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4 mb-lg-0" style={{marginTop:'5vh'}}>

                  <div className="d-flex justify-content-center mb-2" style={{paddingTop:'1vh'}}>
                    <input type="datetime-local" id="daytime" style={{ margin: '0.5vw', padding: '0.1vw', border:'none' ,borderRadius:'1vh' }} onChange={(e)=>{setDateTime(e.target.value); console.log(e.target.value)}}/>
                    <Button onClick={()=>{
                      navigate('/Checkout',{state: { data :{...data, dateTime}}});
                    }}>Book Now</Button>
                    <Button outline className="ms-1">Rate</Button>
                  </div>


                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Reviews</span>And Ratings</MDBCardText>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Donec aliquam, risus et imperdiet euismod, neque dui placerat felis, a varius enim odio vitae orci. Vestibulum sollicitudin nulla finibus fermentum scelerisque</MDBCardText>
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }} > rbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fame</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section> </>
  );
}
