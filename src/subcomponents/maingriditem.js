import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from "mdb-react-ui-kit";
import Submitbtn from "./submitbtn";
import { Card, Col, Row } from "react-bootstrap";
import BasicFn from "./star";

function Maingriditem({ image, text, activeStars, rate, onPress, noofcomments, category }) {
    return (
        <div style={{ backgroundColor: '#eee' }}>


                        <Card style={{ borderRadius: '15px', backgroundColor: '#2C74B3' }}>
                            <div className="p-4 text-black" >
                                <div className="mb-3">
                                    <div tag='h6' style={{color:'#ffffff'}}>{text}</div>

                                </div>
                                <Row className="d-flex align-items-center mb-4">
                                    <Col sm='4' ><img src={image} style={{maxHeight:'11vh'}} alt="Service"/></Col>
                                    <Col sm='8' style={{color:'#ffffff'}}>
                                            <Col sm='12' ><b>{category}</b></Col>
                                            <Col sm='12' ><b>Rs. {rate} / Session</b></Col>
                                            <Col sm='12' style={{paddingTop:'2vh'}}><BasicFn activeStars={activeStars} totalStars={5} /></Col>
                                    </Col>
                                </Row>
                                <hr />
                                <div className='mb-2' style={{color:'#ffffff'}}>{noofcomments} comments</div>
                                    <Submitbtn text="Book Now" onPress={onPress}/>
                            </div>
                        </Card>
        </div>
    );
}

export default Maingriditem;

