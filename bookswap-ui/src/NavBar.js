import React, { Component } from 'react'
import "./NavBar.css"

class Navbar extends React.Component {
    render() {
        return (
            // <div>
            //   <ul id="nav">
            //     <li><a href="./Home">Home</a></li>
            //     <li><a href="./Login">Login</a></li>
            //     <li><a href="#">Search</a></li>
            //     <li><a href="./Library">Library</a></li>
            //   </ul>
            // </div>

            <div className='custom-nav'>
                <div className='tabcontent'>
                    <span className='floatLeft'>
                        {/* <Image src={chesslogo} width="60"
                            height="80" /> */}
                        <span className='nav-logo-text'>
                            Book Swap
                        </span>
                    </span>

                    <span className='floatRight'>
                        {/* <span className='user-image nav-text-others'> 
                        Username  

                           {/* {this.props.user.username}  
                           </span> */}
                            <div>
               <ul id="nav">
                 {/* <li><a href="./Home">Home</a></li> */}
                {/* <li><a href="./Login">Login</a></li> */}
                <li><a href="/books">Books</a></li>
                 <li><a href="/library">My Library</a></li>
                 <li><a href="/">Logout</a></li>
               </ul>
             </div>
                        {/* <DropdownButton

                            title={
                                <Image src={this.props.user.imageUrl} roundedCircle width="60"
                                    height="60" />
                            }
                        >
                            <Dropdown.Item href="/">
                                <Row>
                                    <Col sm="2"><img src={logout} alt='' width='20' height='20' /></Col>
                                    <Col sm="10">Logout</Col>
                                </Row>
                            </Dropdown.Item>
                        </DropdownButton> */}
                    </span>
                </div>

            </div>


        );
    }
}

export default Navbar