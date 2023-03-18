import React from 'react';
import Navbar from "./navbar";
import Searchbar from "../subcomponents/searchbar";

import officeimg from "../assets/industrial-style-office.jpg";
import homework from "../assets/Home.jpg"

import { Col, Row } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Frontgriditem from "../subcomponents/frontgriditem";
import FooterAS from "./footer";
import Downgriditem from "../subcomponents/downgriditem";

import doctor from '../assets/gridassets/doctor.png'
import lawyer from '../assets/gridassets/lawyer.png'
import dentist from '../assets/gridassets/dentist.png'
import barber from '../assets/gridassets/barber.png'
import electritian from '../assets/gridassets/electritian.png'
import plumber from '../assets/gridassets/plumber.jpg'
import carpenter from '../assets/gridassets/carpenter.png'

function Landing(props) {

    const gridData = [
        {
                image: doctor,
                text: 'Book a Doctor\'s Appointment',
        },
        {
            image: lawyer,
            text: 'Consult a Lawyer',
        },{
            image: dentist,
            text: 'Book a Dentist\'s Appointment',
        },{
            image: barber,
            text: 'Book a Salon Appointment',
        },
]
    const gridopt = gridData.map((data, id) =>
    {
        return(
            <>
                <Col key={id}>
                    <Frontgriditem image={data.image} text={data.text}/>
                </Col>
            </>
        )
    })



    return (
        <>
            <Navbar/>
            <div style={styles.bodydiv}>
                <Searchbar/>
            </div>
            <div style={styles.griddiv}>
                <div style={styles.headinggrid}>
                    <Row>
                        <Col>Our Services</Col>
                    </Row>
                </div>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <div >
                        <Row style={{paddingBottom:'8vh'}}>
                            {gridopt}
                        </Row>
                        <Row style={{paddingBottom:'8vh'}}>
                            {gridopt}
                        </Row>
                    </div>
                </AnimationOnScroll>
            </div>

            <div style={styles.subgriddiv}>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                <div style={styles.innergrid}>
                    <div style={styles.subheadinggrid}>
                        <Row>
                            <Col>Home Repair Solutions</Col>
                        </Row>

                    </div>
                    <div>
                        <Row>
                            <Col>
                                <Downgriditem text="Carpenters" image={carpenter}/>
                            </Col>
                            <Col>
                                <Downgriditem text="Electricians" image={electritian}/>
                            </Col>
                            <Col>
                                <Downgriditem text="Plumbers" image={plumber}/>
                            </Col>
                        </Row>
                    </div>
                </div>
                </AnimationOnScroll>
            </div>

                <FooterAS/>




        </>
    );
}

const styles = {
    bodydiv: {
        background: '#F7D65A',
        marginTop: '13vh',
        paddingTop: '30vh',
        paddingBottom: '30vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        backgroundImage: `url(${officeimg})`,
    },
    griddiv: {
        height: '60vh',
        background: '#ffffff',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    subgriddiv: {
        height: '70vh',
        backgroundImage: `url(${homework})`,
        paddingLeft: '10vw',
        paddingRight: '10vw',
        paddingBottom: '10vh',
        paddingTop: '10vh',
        marginTop: '7vh',
    },
    innergrid:{
        background: '#ffffff',
        height: '50vh',
        borderRadius: '5vh',
    },
    headinggrid:
        {
            paddingTop: '4.5vh',
            paddingBottom: '7vh',
            textAlign: "center",
            fontFamily: 'Bungee Shade',
            color: "#06283D",
            fontSize: '250%',
        },
    subheadinggrid:
        {
            paddingTop: '1vh',
            textAlign: "center",
            fontFamily: 'Stick No Bills',
            color: "#06283D",
            fontSize: '250%',
            borderBottom: "3px solid #06283D",
        },

}

export default Landing;
