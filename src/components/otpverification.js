import React, { useReducer } from 'react';
import Navbar from "./navbar";
import FooterAS from "./footer";
import homework from "../assets/Home.jpg";
import { Col, Row } from "react-bootstrap";
import officeimg from "../assets/industrial-style-office.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";

function OTP(props) {
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

    const [state, dispatch] = useReducer(reducer, { otp: '', });


    const submitHandler = async (e) => {

    if(state.otp === '') {
            updateAlert("Please enter a valid Otp");
        }
        else
        {
            updateAlert("");
            // const email = state.email;
            // const password = state.password;
            // try {
            //
            //     e.preventDefault();
            //     const response = await login({ email , password });
            //     if (response.success) {
            //         console.log(response.message);
            //         await AsyncStorage.setItem("token", response.data);
            //         navigation.navigate("Home");
            //     } else {
            //         updateAlert("Invalid OTP Details!");
            //     }
            // } catch (error) {
            //     console.log(error.message);
            // }
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
                                    <p style={{color:'red', fontSize:'2vh'}}>{state.alerttxt}</p>
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
        textShadow: '7px 7px #06283D',
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
            borderBottom:'4px solid #06283D',
            fontFamily: 'Edu NSW ACT Foundation',
            color: "#06283D",
            fontSize: '280%',
        },
}

export default OTP;
