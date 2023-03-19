import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import Maingriditem from "../subcomponents/maingriditem";
import { Button, Col, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Formlabel from "../subcomponents/formlabel";
import lawyer from '../assets/gridassets/lawyer.png'
import { checklogin } from "../functions/loginfunc";
import { allProfessionalData } from "../apicalls/users";
import { useNavigate } from "react-router-dom";

function Maingrid(props) {
    const navigate =  useNavigate();
    function bookingNavigation(id)
    {
        navigate('/ProfDetails',{ state: {data: id} });
    }

    const [maingridArray, setMainGrid]=useState();
    const [maingridArraymapped, setMgam] = useState();

    useEffect(()=>{
        setLoggedIn(checklogin());
        try {
            allProfessionalData().then((response) => {
                if(response.hasOwnProperty('professionals'))
                {
                    const mg = response.professionals;
                    setMainGrid(response.professionals[0]);
                    console.log(maingridArray);
                    setMgam( mg.map((data, id) =>
                    {
                        return(
                            <>
                                <Col sm="4" className="mt-3">
                                    <Maingriditem image={lawyer} category={data.Profession} text={data.Name} rate={data.Price} activeStars={data.Rating} noofcomments={Math.floor((Math.random() * 100) + 1)}
                                                  onPress={()=>{
                                                      bookingNavigation(data);
                                                  }}/>
                                </Col>
                            </>
                        )
                    }));
                }
                else {
                    console.log(response)
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    },[]);
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
        <Navbar loggedIn={loggedIn}/>
            <div style={styles.container}>
                <Row>
                    <Col sm="3" style={{padding:'5vh 2vw 2vw 5vh'}}>
                        <InputGroup >
                        <Form.Control style={{ fontSize:'150%', paddingLeft:'2vw', }}
                                      placeholder="Search"
                                      id="searchbarinput"
                        />
                        <Button className="search-button" style={{background:'#2C74B3', fontSize:'2vh', width:'5vw'}}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </Button>
                        </InputGroup>
                        <div style={{paddingTop:'2vh'}}>
                            <Formlabel text='Filter'/>
                        </div>

                    </Col>
                    <Col sm="9" style={{backgroundColor: '#eee', padding:'5vh'}}>
                        <Row>
                            {maingridArraymapped}
                        </Row>

                    </Col>
                </Row>

            </div>

        </>
    );
}
const styles = {
    container:{
        overflow: 'hidden',
        paddingTop:'13vh',
        background:'#ffffff',

    }
}
export default Maingrid;
