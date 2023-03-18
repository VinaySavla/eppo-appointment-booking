import React, { useReducer } from 'react';
import Navbar from "./navbar";
import FooterAS from "./footer";
import homework from "../assets/Home.jpg";
import { Col, Row } from "react-bootstrap";
import officeimg from "../assets/industrial-style-office.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";

function SIgnUp(props) {

    function reducer(currentState, action) {

        switch (action.type){
            case 'name':
                return { ...currentState, name : action.value}
            case 'address':
                return { ...currentState, address : action.value}
            case 'email':
                return { ...currentState, email : action.value}
            case 'phone':
                return { ...currentState, phone : action.value}
            case 'password':
                return { ...currentState, password : action.value}
            case 'passwordAgain':
                return { ...currentState, passwordAgain : action.value}
            case 'alerttxt':
                return { ...currentState, alerttxt : action.value}
            case 'city':
                return { ...currentState, city : action.value}
        }

        return currentState
    }
    function updateName(name){
        dispatch({type : 'name', value: name.target.value});
    }
    function updateAddress(address){
        dispatch({type : 'address', value: address.target.value});
    }
    function updateEmail(email){
        dispatch({type : 'email', value: email.target.value});
    }
    function updatePhone(phone){
        dispatch({type : 'phone', value: phone.target.value});
    }
    function updatePassword(password){
        dispatch({type : 'password', value: password.target.value});
    }
    function updatePasswordAgain(passwordAgain){
        dispatch({type : 'passwordAgain', value: passwordAgain.target.value});
    }
    function updateAlert(alerttxt){
        dispatch({type : 'alerttxt', value: alerttxt});
    }
    function updateCity(city){
        dispatch({type : 'city', value: city.target.value});
    }





    const [state, dispatch] = useReducer(reducer, { name: '' , password: '', passwordAgain:'', address: '', email:'', phone: 0, alerttxt: '', city: ''});

    const submit = async () =>{

        if(state.password !== state.passwordAgain){
            updateAlert("Passwords don't Match!");
        }
        else if(state.name === ''){
            updateAlert("Enter a legitimate name!!");
        }
        else if(!(String(state.password)
            .match(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            ))){
            updateAlert("Password requires Minimum eight characters, at least one letter and one number!");
        }
        else if(state.address === ''){
            updateAlert("Address too small");
        }
        else if(state.city === ''){
            updateAlert("Enter city");
        }
        else if(!(String(state.email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))) {
            updateAlert("Please enter a valid email address!");
        }
        else if(!(String(state.phone)
            .match(
                /^(\+\d{1,3}[- ]?)?\d{10}$/
            ))) {
            updateAlert("Please enter a valid mobile no!");
        }
        else{
            updateAlert('')
            // navigation.navigate("Home")
            // const name = state.name;
            // const email = state.email;
            // const password = state.password;
            // const phoneno = state.phone;
            // const response = await registerAPI({
            //     name,
            //     email,
            //     password,
            //     phoneno
            // });
            // if(await response.success){
            //     console.log(response)
            // }
        }


    }
    return (
        <>
            <Navbar/>
            <div style={styles.bodydiv}>
                <Row>

                    <Col  style={styles.sideForm}>
                        <h3 style={styles.subheadinggrid}>Sign Up</h3>
                        <div className="mb-3">
                            <Formlabel text='Name'/>
                            <Inputbox type="text"
                                      className="form-control"
                                      placeholder="Enter Name"
                                      onChange={updateName}
                            />
                        </div>
                        <Row>

                        <Col >

                            <div className="mb-3">
                                <Formlabel text='Email Address'/>
                                <Inputbox type="email"
                                          className="form-control"
                                          placeholder="Enter email"
                                          onChange={updateEmail}
                                />

                            </div>
                            <div className="mb-3">
                                <Formlabel text='City'/>
                                <Inputbox type="text"
                                          className="form-control"
                                          placeholder="Enter City"
                                          onChange={updateCity}
                                />
                            </div>
                            <div className="mb-3">
                                <Formlabel text='Address'/>
                                <Inputbox type="text"
                                          className="form-control"
                                          placeholder="Enter Address"
                                          onChange={updateAddress}
                                />
                            </div>


                        </Col>
                        <Col>
                            <div className="mb-3">
                                <Formlabel text='Mobile No'/>
                                <Inputbox type="number"
                                          className="form-control"
                                          placeholder="Enter MobileNo"
                                          onChange={updatePhone}
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
                            <div className="mb-3">
                                <Formlabel text='Confirm Password'/>
                                <Inputbox type="password"
                                          className="form-control"
                                          placeholder="Enter password"
                                          onChange={updatePasswordAgain}
                                />
                            </div>
                        </Col>
                        </Row>
                        <div style={{paddingLeft:'10vw', paddingRight:'10vw'}}>
                            <Submitbtn text='Submit' onPress={submit}/>
                            <p style={{color:'red', fontSize:'120%'}}>{state.alerttxt}</p>
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
        height: '95vh',
        borderRadius: '5vh',
        paddingLeft:'5vw',
        paddingRight:'5vw',
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

export default SIgnUp;
