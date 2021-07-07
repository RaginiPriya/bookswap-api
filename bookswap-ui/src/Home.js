import React, { Component } from 'react'
import Login from './Login'
import './Home.css'

class Home extends Component {

    render() {
        return(
            <body id="page-top">
        
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">Start Swapping</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                        {/* <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li> */}
                        <li class="nav-item"><a class="nav-link" href="#contact">Login/Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Trade Books with Our Book Swapping Club</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">You have a book which you have already read and want to own some other book? This is the perfect place for you. No need for cash transactions, just old fashioned barter system.</p>
                        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
        
        <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">We've got what you need!</h2>
                        <hr class="divider divider-light" />
                        {/* <p class="text-white-75 mb-4"> */}
                        <p>
                            {/* Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached! */}
                            <tr class="text-white-75 mb-4">
                                <td>1. Type in books you want to give away</td>
                                <td>2. Receive requests from others for your books</td>
                                <td>3. View others' library</td>
                                <td>4. Meet up and swap!</td>
                            </tr>
                        </p>
                        <a class="btn btn-light btn-xl" href="#contact">Get Started!</a>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">It's Free!</h3>
                            <p class="text-muted mb-0">No need for cash transactions</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Connect</h3>
                            <p class="text-muted mb-0">Get to know people with your interests</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Wish Away</h3>
                            <p class="text-muted mb-0">An easy and fun way to swap books you no longer need for books you want to read</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Environment Friendly</h3>
                            <p class="text-muted mb-0">Saves you money, shelf space and the environment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 text-center">
                {/* <h2 class="mb-4">Start Swapping!</h2> */}
                <a class="btn btn-light btn-xl" href="#contact"><h5>Start Swapping!</h5></a>
            </div>
        </section>
       
        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                <Login />
                </div>
                
                {/* <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+1 (555) 123-4567</div>
                    </div>
                </div> */}
            </div>
        </section>
        
        
    </body>
                /* This is the first page user will see. Add images, words about how we can swap */
            // </div>
        )
    }
}

export default Home