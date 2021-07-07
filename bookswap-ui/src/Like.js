import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';

class Like extends Component {
state = { liked: false };
toggle = (friend, title) => {
	let localLiked = this.state.liked;

	// Toggle the state variable liked
	localLiked = !localLiked;
	this.setState({ liked: localLiked });
    this.sendMessage(friend, title);

};

sendMessage = (usernameP, title) => {
    console.log('sendMessage')

   const message = {
     senderId: this.props.user.username,
     recipientId: usernameP,
     senderName: this.props.user.username,
     recipientName: usernameP,
     content: ' liked your book titled ' + title,
     timestamp: new Date(),
   };
   if(this.props.socket){
       console.log('sending')
    this.props.socket.send("/app/chat", {}, JSON.stringify(message));
   }
   

 // }
};

render() {
    const { friend, title } = this.props
    console.log(friend + 'is friend')
	return (
	<div className="container">
		<center>
		<div
			className="container"
			style={{ border: "1px solid black", width: "15%" }}
			onClick={() => this.toggle(friend, title)}
		>
			{this.state.liked === false ? (
			<FontAwesomeIcon icon={faHeartBroken} />
			) : (
			<FontAwesomeIcon icon={faHeart} />
			)}
		</div>
		</center>
	</div>
	);
}
}

const mapStateToProps = (state) => ({
    user: state.userReducer,
    socket: state.websocketReducer.socket
})

export default connect(mapStateToProps)(Like);