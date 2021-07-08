import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Toast } from 'react-bootstrap'
import  Navbar  from './NavBar';
import Like from "./Like.js"
import usersbookdata from './usersbookdata.js';
import './Library.css'
import { Row, Col} from 'reactstrap'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API_BASE_URL } from './constants'

class Books extends Component {

    state = {
        message: ""
    }

    stompClient = null;

    // write a function to call nearby books api

    componentDidMount() {
        this.connect();
    }

    connect = () => {
        const Stomp = require("stompjs");
        var SockJS = require("sockjs-client");
        var url = API_BASE_URL + '/ws';
        SockJS = new SockJS(url);
        this.stompClient = Stomp.over(SockJS);
        this.stompClient.connect({}, this.onConnected, this.onError);
    };

    onConnected = () => {
        console.log("connected");
        console.log(this.props.user)
        this.stompClient.subscribe(
            "/user/" + this.props.user.username + "/queue/messages",
            this.onMessageReceived
        );
        this.props.setWs({ socket: this.stompClient });
    };

    onError = (err) => {
        console.log(err);
    };

    onMessageReceived = (msg) => {
        const notification = JSON.parse(msg.body);
        console.log(notification)
        this.setState({ message: notification.senderId + notification.content })
    };

    setShow = (close) => {
        if(!close){
            this.setState({message : null})
        }
        
    }



    render() {
        return (
            <div style={{ margin: '10px' }}>
                <Navbar />
                <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    // minHeight: '100px',
  }}
>

                <Toast show={this.state.message}  onClose={() => this.setShow(false)} style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}>
  <Toast.Header>
    <strong className="mr-auto">Notification</strong>
    {/* <small>11 mins ago</small> */}
  </Toast.Header>
  <Toast.Body>{this.state.message}</Toast.Body>
</Toast>
</div>
                {/* {this.state.message} */}
                {/* <Button
                    onClick={() => this.sendMessage('priya21', 'Harry Potter')}
                >SEND</Button> */}
                {usersbookdata.map(({ username, books }) => (
                    // border: '2px solid #f4623a', 
                    <div style={{ margin: '10px', padding: '10px' }}>
                        <div className='text-center'>
                            <a class="h4 mb-2 " style={{ textDecoration: 'none' }}>{username === this.props.user.username ? 'viniti' : username}</a>
                        </div>
                        <hr class="divider" />
                        <Row>
                            {books.map(({ title, thumbnailUrl, authors, pageCount }) => (
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
                                            <p className="text-muted mb-0">{title}</p>
                                            <p className="card-text">
                                                {authors, pageCount}
                                            </p>
                                            {/* <a href="#!" className="btn btn-primary">Button</a> */}
                                            <Like friend={username} title={title} />
                                            {/* {this.sendMessage(username, title)} */}
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

                ))}


                {/* books page which will be sorted by nearest place and grouped by username, like [{username1: [book1, book2]}, {username2: [book2,book3,book4]}]. */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducer
})

const mapDispatchToProps = (dispatch) => ({
    setWs: (data) => {
        const action = {
            type: 'WS',
            payload: data
        }
        return dispatch(action)
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Books)