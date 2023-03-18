import React from 'react';
import Navbar from "./navbar";
import Maingriditem from "../subcomponents/maingriditem";
import { Button, Col, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Formlabel from "../subcomponents/formlabel";
import doctor from '../assets/gridassets/doctor.png'
import Frontgriditem from "../subcomponents/frontgriditem";

const maingridArray  = [
    {image:doctor,text:'My name is tyyyy', rate:70, activeStars:3, noofcomments:67, category:'doctor'  },
    {image:doctor,text:'My name is tyyyy', rate:70, activeStars:3, noofcomments:67, category:'doctor'  },
    {image:doctor,text:'My name is tyyyy', rate:70, activeStars:3, noofcomments:67, category:'doctor'  },
    {image:doctor,text:'My name is tyyyy', rate:70, activeStars:3, noofcomments:67, category:'doctor'  },
    {image:doctor,text:'My name is tyyyy', rate:70, activeStars:3, noofcomments:67, category:'doctor'  },
    {image:doctor,text:'My name is tyyyy', rate:70, activeStars:3, noofcomments:67, category:'doctor'  },
    {image:doctor,text:'My name is tyyyy', rate:70, activeStars:3, noofcomments:67, category:'doctor'  },
];

const maingridArraymapped = maingridArray.map((data, id) =>
{
    return(
        <>
            <Col sm="4" className="mt-3">
                <Maingriditem image={data.image} category={data.category} text={data.text} rate={data.rate} activeStars={data.activeStars} noofcomments={data.noofcomments}/>
            </Col>
        </>
    )
})

function Maingrid(props) {
    return (
        <>
        <Navbar/>
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
