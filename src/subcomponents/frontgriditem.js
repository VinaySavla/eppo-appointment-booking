import React from 'react';
import { Col, Row } from "react-bootstrap";

function Frontgriditem({image, text}) {
    return (

        <a>
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
        background: '#F7D65A',
        borderRadius: '2vh',
        height: '15vh',
        padding: '2vh',

},
    gridtitle:{
        marginTop: 'auto',
        marginBottom: 'auto',
        fontFamily: 'Edu NSW ACT Foundation',
        fontSize: '125%',
        },

}

export default Frontgriditem;
