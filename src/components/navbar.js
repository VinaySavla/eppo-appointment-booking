import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import eppologo from '../assets/eppo-logo-zip-file/png/logo-no-background.png';

function navibar() {
    return (
        <Navbar style={{background: '#FDFBE2'}} expand="lg" fixed="top">
            <Container  fluid style={{padding:10, paddingRight:'7vw', paddingLeft:'7vw', height:'13vh',}}>
                <Navbar.Brand href="/" ><img alt={"Eppo"} src={eppologo} style={{height:'12vh'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav style={{marginLeft: 'auto'}}>
                        <Nav.Link href="/login" style={styles.Navlink}>Login</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="/usersignup" style={styles.Navlink2 }>SignUp</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const styles ={
    Navlink:{
        fontSize: '250%',
        color: '#06283D',
        fontFamily: 'Stick No Bills',


},
    Navlink2:{
        fontSize: '250%',
        color: '#F7D65A',
        fontFamily: 'Stick No Bills',


    }
}

export default navibar;
