import React, { useEffect, useReducer, useState } from 'react';
import Navbar from "./navbar";
import FooterAS from "./footer";
import homework from "../assets/Home.jpg";
import { Col, Row } from "react-bootstrap";
import officeimg from "../assets/industrial-style-office.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";
import { useNavigate, useNavigation } from "react-router-dom";
import { register } from "../apicalls/users";
import { checklogin } from "../functions/loginfunc";

function SIgnUp(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {

        if(checklogin())
        {
            setLoggedIn(true);
            window.location.href = '/';
        }
    }, []);
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
            case 'profession':
                return { ...currentState, profession : action.value}
            case 'experience':
                return { ...currentState, experience : action.value}
            case 'about':
                return { ...currentState, about : action.value}


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
    function updateProfession(profession){
        dispatch({type : 'profession', value: profession.target.value});
    }
    function updateExperience(experience){
        dispatch({type : 'experience', value: experience.target.value});
    }
    function updateAbout(about){
        dispatch({type : 'about', value: about.target.value});
    }




    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, { name: '' , password: '', passwordAgain:'', address: '', email:'', phone: 0, alerttxt: '', city: '', profession:'', experience:'',  about:''});
    const [isChecked, setIsChecked] = useState(false);
    const [sent, setSent] = useState(false);

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

        else if(!sent){
            updateAlert('')
            // navigation.navigate("Home")
            const Name = state.name;
            const Email = state.email;
            const Password = state.password;
            const MobileNumber = state.phone;
            const Address = state.address;
            const City = state.city;
            // setSent(true);
            const rep = await register({
                MobileNumber
            });
            if(rep.return == true){
                const payload = {
                    Name, Email, Password, MobileNumber, Address, City
                }
                navigate('/otp',{ state: payload });
            }
            else {
                console.log(rep);
            }
        }


    }
    return (
        <>
            <Navbar loggedIn={loggedIn}/>
            <div style={styles.bodydiv}>
                <Row>

                    <Col  style={styles.sideForm}>
                        <h3 style={styles.subheadinggrid}>Sign Up ></h3>
                        <div className="mb-3">
                            <Formlabel text='Name'/>
                            <Inputbox type="text"
                                      className="form-control"
                                      placeholder="Enter Name"
                                      onChange={updateName}
                            />
                        </div>
                        <div className="form-check" style={{paddingBottom:'1vh'}}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                   checked={isChecked} onChange={() => {
                                setIsChecked(!isChecked)
                            }}
                                   style={{height:'3vh', width:'3vh'}}/>&nbsp;
                            <label className="form-check-label" htmlFor="flexCheckChecked" style={{height:'3vh', fontSize:'3vh'}}>
                                I am a Service Provider
                            </label>
                        </div>
                        <Row>

                        <Col>

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
                            {isChecked ? <div className="mb-3">
                                <Formlabel text='Profession'/>
                                <Inputbox type="text"
                                className="form-control"
                                placeholder="Enter Profession"
                                onChange={updateProfession}
                                />
                                </div>: null}
                            {isChecked ? <div className="mb-3">
                                <Formlabel text='Experience'/>
                                <Inputbox type="number"
                                          className="form-control"
                                          placeholder="No of years"
                                          onChange={updateAddress}
                                />
                            </div>: null}
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
                            <div className="mb-3" >
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

                            {isChecked ? <div className="mb-3">
                                <Formlabel text='About'/>
                                <textarea
                                    style={{height:'21vh'}}
                                          rows="3"
                                          className="form-control"
                                          placeholder="No of years"
                                          onChange={updateAddress}
                                />
                            </div>: null}
                        </Col>
                        </Row>
                        <div style={{paddingLeft:'10vw', paddingRight:'10vw'}}>
                            <Submitbtn text='Submit' onPress={submit}/>
                            <p style={{color:'red', fontSize:'2vh'}}>{state.alerttxt}</p>
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
    sideForm:{
        padding:'3vh',
        background: '#FDFBE2',
        borderRadius: '5vh',
        paddingLeft:'5vw',
        paddingRight:'5vw',
    },
    subheadinggrid:
        {
            padding: '1vh',
            borderBottom:'4px solid #0A2647',
            fontFamily: 'Edu NSW ACT Foundation',
            color: "#0A2647",
            fontSize: '6vh',
        },
}

export default SIgnUp;
