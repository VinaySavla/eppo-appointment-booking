import React from 'react';
import { Col, Row } from "react-bootstrap";

function Frontgriditem({image, text, onPress, link}) {
    return (

        <a href={link} style={{textDecoration:'none'}}>
            <div style={styles.maindiv}>
                <Row>
                    <Col sm={4} ><img src={image} style={{maxHeight:'11vh'}} alt="Service"/></Col>
                    <Col sm={8} style={styles.gridtitle}>{text}</Col>
                </Row>
            </div>
        </a>

    );
}

const styles = {
    maindiv:{
        background: '#2C74B3',
        borderRadius: '2vh',
        height: '15vh',
        padding: '2vh',

},
    gridtitle:{
        marginTop: 'auto',
        marginBottom: 'auto',
        fontFamily: 'Edu NSW ACT Foundation',
        fontSize: '125%',
        color:'#ffffff',
        },

}

export default Frontgriditem;
