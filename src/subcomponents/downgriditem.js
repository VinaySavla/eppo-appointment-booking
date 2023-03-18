import React from 'react';
import { Col, Row } from "react-bootstrap";

function DownGridItem({image, text}) {
    return (

        <a>
            <div style={styles.maindiv}>
                <Row>
                    <Col><img src={image} style={{ maxWidth:'100%', height:'25vh'}} alt="Service"/></Col>
                </Row>
                <Row>
                    <Col style={styles.subheadinggrid}>
                        {text}
                    </Col>
                </Row>
            </div>
        </a>

    );
}

const styles = {
    maindiv:{
        height: '30vh',
        margin: '4vh',
},
    gridtitle:{
        marginTop: 'auto',
        marginBottom: 'auto',
        fontFamily: 'Edu NSW ACT Foundation',
        fontSize: '125%',
        },
    subheadinggrid:
        {
            paddingTop: '1vh',
            textAlign: "center",
            fontFamily: 'Edu NSW ACT Foundation',
            color: "#06283D",
            fontSize: '200%',
        },
}

export default DownGridItem;
