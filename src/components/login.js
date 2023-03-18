import React from 'react';
import Navbar from "./navbar";
import FooterAS from "./footer";
import homework from "../assets/Home.jpg";
import { Col, Row } from "react-bootstrap";
import officeimg from "../assets/industrial-style-office.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";

function Login(props) {
    return (
        <>
            <Navbar/>
            <div style={styles.bodydiv}>
                <Row>
                    <Col sm={8}>
                        <h1 style={styles.sideHeader}>Find The Service That's Right For You</h1>
                    </Col>
                    <Col sm={4} style={styles.sideForm}>
                            <h3 style={styles.subheadinggrid}>LogIn</h3>
                            <div>
                                <div className="mb-3">
                                    <Formlabel text='Email Address'/>
                                    <Inputbox type="email"
                                              className="form-control"
                                              placeholder="Enter email"/>
                                </div>
                                <div className="mb-3">
                                    <Formlabel text='Password'/>
                                    <Inputbox type="password"
                                              className="form-control"
                                              placeholder="Enter password"/>
                                </div>

                                <Submitbtn text='Submit'/>
                                <div style={{paddingTop:'2vh'}}>
                                    <Submitbtn text='Forgot Password' secondary={true} />
                                </div>

                            </div>

                    </Col>
                </Row>
            </div>
            <FooterAS/>
        </>


    );
}

const styles = {
    bodydiv:{
        background: '#FDFBE2',
        backgroundImage: `url(${officeimg})`,
        height: '87vh',
        marginTop: '13vh',
        paddingTop: '10vh',
        paddingBottom: '10vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    sideHeader:{
        fontFamily: 'Lobster',
        color: '#FDFBE2',
        fontSize: '500%',
        textShadow: '7px 7px #06283D',
        paddingTop: '15vh',
    },

    sideForm:{
        padding:'3vh',
        background: '#FDFBE2',
        height: '70vh',
        borderRadius: '5vh',
    },
    subheadinggrid:
        {
            padding: '1vh',
            borderBottom:'4px solid #06283D',
            fontFamily: 'Edu NSW ACT Foundation',
            color: "#06283D",
            fontSize: '280%',
        },
}

export default Login;
