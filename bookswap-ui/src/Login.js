import React, { Component } from 'react'
import { connect } from 'react-redux';
import { API_BASE_URL } from './constants'
import { Redirect } from 'react-router-dom'
import './Login.css'
// import {Alert} from 'react-bootstrap'

class Login extends Component {

    state = {
        usernameOrEmail: '',
        loginPassword: '',
        username: '',
        password: '',
        email: '',
        area: '',
        city: '',
        state: '',
        country: '',
        shouldRedirect: false,
        // loginError: false
    };

    login = event => {
        if(event){
            event.preventDefault();
        }
        
    
        fetch(API_BASE_URL + '/api/auth/signin', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usernameOrEmail: this.state.usernameOrEmail, password: this.state.loginPassword })
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.accessToken && res.username) {

                    this.props.setUser({ token: res.accessToken, username: res.username })
                    this.setState({ shouldRedirect: true })
                }
            }).catch(error => {
                console.log(error);
                // error.json().then((body) => {
                //     console.log(body);
                // });
                // this.setState({loginError: true})
            });
    ;
    }

    signUp = event => {
        event.preventDefault();
    
        fetch(API_BASE_URL + '/api/auth/signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password, email: this.state.email, area: this.state.area, city: this.state.city, state: this.state.state, country: this.state.country })
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                const usernameOrEmail = this.state.username;
                const loginPassword = this.state.password;
                this.setState({usernameOrEmail : usernameOrEmail, loginPassword: loginPassword});
                this.login();
            }
            );
    }

    render() {
        const redirect = this.state.shouldRedirect ? <Redirect to="/books" /> : null

    //     const error = this.state.loginError ? 
    //     (<Alert variant="danger" onClose={() => this.setState({loginError: false}) } dismissable>
    //     <Alert.Heading>Oh snap!</Alert.Heading>
    //     <p>
    //       You have entered incorrect login details.
    //     </p>
    //   </Alert>)
    //   :
    //   null;

        return (

            <div>
                {redirect}

                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6 text-center">
                            <h2 class="mt-0">Log In</h2>
                            <hr class="divider" />
                            <p class="text-muted mb-5">Connect with book lovers like you!</p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                            <form id="loginForm" onSubmit={this.login}>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="text"  value={this.state.usernameOrEmail}
                        onChange={e => this.setState({ usernameOrEmail: e.target.value })}/>
                                    <label for="email">Username or Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="password" value={this.state.loginPassword}
                        onChange={e => this.setState({ loginPassword: e.target.value })}/>
                                    <label for="phone">Password</label>
                                </div>
                                <div className="d-grid"><button className="btn btn-primary btn-xl" id="loginButton" type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                            <h2 class="mt-0">Sign Up</h2>
                            <hr class="divider" />
                            <p class="text-muted mb-5">It's quick and Easy.</p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                            <form id="signupForm" onSubmit={this.signUp}>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="username" type="text" value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })}/>
                                    <label for="username">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}/>
                                    <label for="email">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="password" type="password" value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}/>
                                    <label for="password">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="area" type="text" value={this.state.area}
                        onChange={e => this.setState({ area: e.target.value })}/>
                                    <label for="email">Area</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="city" type="text" value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })}/>
                                    <label for="city">City</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="state" type="text" value={this.state.state}
                        onChange={e => this.setState({ state: e.target.value })}/>
                                    <label for="state">State</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="country" type="text" value={this.state.country}
                        onChange={e => this.setState({ country: e.target.value })}/>
                                    <label for="country">Country</label>
                                </div>
                                <div className="d-grid"><button className="btn btn-primary btn-xl" id="signupButton" type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>


                {/* sign up/login page, with email, username, password, name, area, city, state, country. (if email or username is already registered, we will throw error). */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUser: (data) => {
        const action = {
            type: 'SET_USER',
            payload: data
        }
        return dispatch(action)
    }
})

export default connect(null, mapDispatchToProps)(Login)