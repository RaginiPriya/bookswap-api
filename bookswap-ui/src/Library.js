import React, { Component } from 'react'
import { connect } from 'react-redux';
import BookData from './bookdata'
import Button from 'react-bootstrap/Button';
import { heartFill, heart } from 'react-bootstrap-icons';
import 'font-awesome/css/font-awesome.min.css';
import Like from "./Like.js"

import "./Library.css"

import { Label, Input, CustomInput, Row, Col, ModalFooter, ModalBody, Modal, ModalHeader, FormGroup, CardHeader, CardTitle, CardBody, Form, ButtonGroup, UncontrolledTooltip, Badge, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap"
import { icon } from '@fortawesome/fontawesome-svg-core';
import Navbar from './NavBar';

class Library extends Component {

    // write a function to get the books of the user
    // pass Bearer + ' ' + this.props.user.token in Authorization header

    // write a function to add, remove books
    // pass the entire books list after adding/removing to backend

    render() {
        return(
            <div style={{ margin: '10px' }}>
                <Navbar />
                {/* This page will show the particular user's library. Can be logged in user's or any other user's */}
                <Row  style={{ margin: '10px' }}>
                    {BookData.map(({title,thumbnailUrl,authors,pageCount}) => (
                        <Col md={2}>

                            <div className="card">
                                <div className="item">
                                    <img
                                        src={thumbnailUrl}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">
                                        {authors,pageCount}
                                        </p>
                                        {/* <a href="#!" className="btn btn-primary">Button</a> */}
                                        {/* <Like/> */}
                                        {/* <a href="#!" onclick="myFunction(this)" className="like"> 
                                            <img src="./icons/emptyHeart.jpg" alt="Like" width="32px" height="32px" viewBox="0 0 20 20"> </img>
                                        </a> */}
                                        
                                    </div>

                                        
                                        {/* <div class="card" style={{width: '18 rem'}}>
                                            <img class="card-img-top" src="..." alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div> */}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducer
})

export default connect(mapStateToProps)(Library)