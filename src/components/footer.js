import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Col, Row } from "react-bootstrap";

function footerAS() {
    return (
        <div style={styles.griddiv}>
                <Row>

                    <Col>
                        <div style={styles.subheadinggrid}>
                            Our Pages
                        </div>
                        <div>
                            <a href="#" style={styles.link}>
                                Login/Register
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                Past Orders
                            </a>
                            <br/>

                        </div>
                    </Col>
                    <Col>
                        <div style={styles.subheadinggrid}>
                            Services
                        </div>
                        <div>
                            <a href="#" style={styles.link}>
                                Appointments
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                Home Improvement
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                Eppo Spa
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div style={styles.subheadinggrid}>
                            Contact Us
                        </div>
                        <div>
                            <a href="#" style={styles.link}>
                                <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;
                                kenneth.nrk123@gmail.com
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                <i className="fa fa-instagram" aria-hidden="true"></i> &nbsp;
                                kenneth_nrk
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;
                                Kenneth Rodrigues
                            </a>
                        </div>
                    </Col>
                </Row>
        </div>

    );
}

const styles = {

    subheadinggrid:
        {
            padding:0,
            paddingTop: '1vh',
            fontFamily: 'Stick No Bills',
            color: "#2C74B3",
            fontSize: '250%',
            borderBottom: "3px solid #0A2647",

        },
    griddiv: {
        height: '30vh',
        background:"#0A2647",
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    link:{
        fontSize: '120%',
        color: '#FDFBE2',
        textDecoration: 'none',
    }

}

export default footerAS;
