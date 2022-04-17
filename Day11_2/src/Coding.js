import React from 'react';
import './coding.css';
import { Navbar, Nav } from 'react-bootstrap'
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";

function Coding() {
    return (
        <Navbar bg="light" expand="lg" className='shadow-lg p-1 mb-5 bg-white rounded '>
            <Navbar.Brand className='mx-5 text-center'><h3>Coding <span className='text text-info'>Addict</span></h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='position-absolute top-0 start-50 translate-middle-x mt-2'>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Projects</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar className="d-none d-sm-block d-md-block" expand="lg">
                <div>
                    <TiSocialGooglePlusCircular size="30" color="skyblue" />
                    <TiSocialPinterestCircular size="30" color="skyblue" />
                    <TiSocialTwitterCircular size="30" color="skyblue" />
                    <TiSocialFacebookCircular size="30" color="skyblue" />
                </div>
            </Navbar>
        </Navbar>
    )
}
export default Coding;