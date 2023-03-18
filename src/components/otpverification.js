import React, { useEffect, useReducer, useState } from 'react';
import Navbar from "./navbar";
import FooterAS from "./footer";
import homework from "../assets/Home.jpg";
import { Col, Row } from "react-bootstrap";
import officeimg from "../assets/industrial-style-office.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";
import { useLocation, useNavigate } from "react-router-dom";
import { register, verify } from "../apicalls/users";



function OtpVerify(props) {



    const {state} = useLocation();

    const navigate =  useNavigate();
    try {

        const {   Name, Email, Password, MobileNumber, Address, City   } = state;
    }catch (error)
    {
        navigate('/');
    }

    const {   Name, Email, Password, MobileNumber, Address, City } = state;



    function reducer(currentState, action) {

        switch (action.type) {
            case "otp":
                return { ...currentState, otp: action.value };
            case "password":
                return { ...currentState, password: action.value }
            case "alerttxt":
                return { ...currentState, alerttxt: action.value };
        }

        return currentState;
    }

    function updateOTP(otp) {
        dispatch({ type: "otp", value: otp.target.value });
    }
    function updateAlert(alerttxt) {
        dispatch({ type: "alerttxt", value: alerttxt });
    }

    const [reducerState, dispatch] = useReducer(reducer, { otp: '', });
    const [sent, setSent] = useState(false);

    const submitHandler = async (e) => {

    if(reducerState.otp === '') {
            updateAlert("Please enter a valid Otp");
        }
        else if(!sent)
        {
            const OTP = reducerState.otp;
            // setSent(true);
            updateAlert("");
            verify({
                Name, Email, Password, MobileNumber, Address, City, OTP
            }).then((response) => {
                // console.log(response)
                // console.log({
                //     Name, Email, Password, MobileNumber, Address, City, OTP
                // })
                if(response.hasOwnProperty('createResponse'))
                {
                    localStorage.setItem('Name', Name);
                    localStorage.setItem('MobileNo', MobileNumber);
                    navigate('/');
                }
                else {
                    updateAlert("Authentication failed")
                }
            });
        }

    };
    return (
        <>
            <Navbar/>
            <div style={styles.bodydiv}>
                <Row>
                    <Col sm={8}>
                        <h1 style={styles.sideHeader}>Find The Service That's Right For You</h1>
                    </Col>
                    <Col sm={4} style={styles.sideForm}>
                            <h3 style={styles.subheadinggrid}>OTP Verificaion</h3>
                            <div>
                                <div className="mb-3">
                                    <Formlabel text='Enter OTP'/>
                                    <Inputbox type="password"
                                              className="form-control"
                                              placeholder="Enter password"
                                              onChange={updateOTP}
                                    />
                                </div>
                                <Submitbtn text='Submit' onPress={submitHandler}/>
                                <div style={{paddingTop:'2vh'}}>
                                    <Submitbtn text='Resend' secondary={true} />
                                    <p style={{color:'red', fontSize:'2vh'}}>{reducerState.alerttxt}</p>
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
        fontSize: '12vh',
        textShadow: '7px 7px #0A2647',
        paddingTop: '15vh',
    },

    sideForm:{
        padding:'15vh 3vh 3vh 3vh',
        background: '#FDFBE2',
        height: '70vh',
        borderRadius: '5vh',
    },
    subheadinggrid:
        {
            padding: '1vh',
            borderBottom:'4px solid #0A2647',
            fontFamily: 'Edu NSW ACT Foundation',
            color: "#0A2647",
            fontSize: '280%',
        },
}

export default OtpVerify;
