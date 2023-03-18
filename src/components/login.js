import React, { useEffect, useReducer, useState } from 'react';
import Navbar from "./navbar";
import FooterAS from "./footer";
import homework from "../assets/Home.jpg";
import { Col, Row } from "react-bootstrap";
import officeimg from "../assets/industrial-style-office.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";
import { checklogin } from "../functions/loginfunc";

function Login(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {

        if(checklogin())
        {
            setLoggedIn(true);
            window.location.href = '/';
        }
    }, []);

    function reducer(currentState, action) {

        switch (action.type) {
            case "email":
                return { ...currentState, email: action.value };
            case "password":
                return { ...currentState, password: action.value }
            case "alerttxt":
                return { ...currentState, alerttxt: action.value };
        }

        return currentState;
    }

    function updateEmail(email) {
        dispatch({ type: "email", value: email.target.value });
    }

    function updatePassword(password) {
        dispatch({ type: "password", value: password.target.value });
    }
    function updateAlert(alerttxt){
        dispatch({type : 'alerttxt', value: alerttxt});
    }

    const [state, dispatch] = useReducer(reducer, { password: '', email: '', alerttxt: '', });
    const [isChecked, setIsChecked] = useState(false);

    const submitHandler = async (e) => {

    if(!(String(state.email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))) {
            updateAlert("Please enter a valid email address!");
        }
    else if(state.password === '')
    {
        updateAlert("Password cannot be blank!");
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
            //         updateAlert("Invalid Login Details!");
            //     }
            // } catch (error) {
            //     console.log(error.message);
            // }
        }

    };
    return (
        <>
            <Navbar loggedIn={loggedIn}/>
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
                                              placeholder="Enter email"
                                              onChange={updateEmail}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Formlabel text='Password'/>
                                    <Inputbox type="password"
                                              className="form-control"
                                              placeholder="Enter password"
                                              onChange={updatePassword}
                                    />
                                </div>
                                <div className="form-check" style={{paddingBottom:'1vh'}}>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                           checked={isChecked} onChange={() => {
                                        setIsChecked(!isChecked)
                                    }}/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I am a Service Provider
                                        </label>
                                </div>
                                <Submitbtn text='Submit' onPress={submitHandler}/>
                                <div style={{paddingTop:'2vh'}}>
                                    <Submitbtn text='Forgot Password' secondary={true} />
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
        paddingTop: '7vh',
        paddingBottom: '7vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    sideHeader:{
        fontFamily: 'Lobster',
        color: '#FDFBE2',
        fontSize: '13vh',
        textShadow: '7px 7px #0A2647',
        paddingTop: '15vh',
    },

    sideForm:{
        padding:'3vh',
        background: '#FDFBE2',
        height: '75vh',
        borderRadius: '5vh',
    },
    subheadinggrid:
        {
            padding: '1vh',
            borderBottom:'4px solid #0A2647',
            fontFamily: 'Edu NSW ACT Foundation',
            color: "#0A2647",
            fontSize: '7vh',
        },
}

export default Login;
