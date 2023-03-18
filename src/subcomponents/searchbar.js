import React from 'react';
import Form from "react-bootstrap/Form";
import { Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import './all.css';

function Searchbar(props) {
    return (
        <>
            <InputGroup style={{height:'8.5vh'}}>
                <Form.Select id="location-dd" style={{fontSize:'180%', paddingLeft:'2vw', fontFamily: 'Stick No Bills'}} >
                    <option value="1" className="location-dd">Mumbai</option>
                    <option value="2" className="location-dd">Delhi</option>
                    <option value="3" className="location-dd">Pune</option>
                </Form.Select>

                <Form.Control style={{border: 'none', fontSize:'150%', paddingLeft:'2vw'}}
                    placeholder="Search for a service in your area"
                    id="searchbarinput"
                />
                <Button className="search-button" style={{background:'#2C74B3', fontSize:'150%', }}>
                   <FontAwesomeIcon icon={faSearch}/>
                </Button>
            </InputGroup>
        </>
    );
}

export default Searchbar;
