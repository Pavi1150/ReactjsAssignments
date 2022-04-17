import React, { useState } from "react";
import './sidebar.css';
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { Navbar, Nav, Container, Offcanvas, Modal, Button } from 'react-bootstrap'
import { AiFillHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
function Sidebar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="heart" />
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><h3>Coding <span className='text text-info'>Addict</span></h3></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3  ">
                <Nav.Link href="#" className="text-secondary fs-5 mt-2 a"><AiFillHome className="me-2" />Home</Nav.Link>
                <Nav.Link href="#" className="text-secondary fs-5 mt-2 a"><AiOutlineTeam className="me-2" />Team</Nav.Link>
                <Nav.Link href="#" className="text-secondary fs-5 mt-2 a"><AiFillProject className="me-2" />Project</Nav.Link>
                <Nav.Link href="#" className="text-secondary fs-5 mt-2 a"><AiFillCalendar className="me-2" />Calendar</Nav.Link>
                <Nav.Link href="#" className="text-secondary fs-5 mt-2 a"><IoDocumentText className="me-2" />Document</Nav.Link>
                <span className="position-absolute bottom-0 start-0 ms-5 mb-5 ps-5">
                  <TiSocialGooglePlusCircular size="40" color="#0BA8E6" />
                  <TiSocialPinterestCircular size="40" color="#0BA8E6" />
                  <TiSocialTwitterCircular size="40" color="#0BA8E6" />
                  <TiSocialFacebookCircular size="40" color="#0BA8E6" />
                </span>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="position-absolute top-50 start-50 translate-middle">
        <Button variant="" onClick={handleShow} className="bg-dark text-white border border-dark hov">
          Show Modal
        </Button>
        <Modal centered show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton >
            <Modal.Title ><h1 className="py-5 ps-5 fs-3 fw-bold ">Modal Content</h1></Modal.Title>
          </Modal.Header>


        </Modal>
      </div>

    </div>


  );
};

export default Sidebar;



