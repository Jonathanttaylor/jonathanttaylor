import {React, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router} from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import smoothscroll from 'smoothscroll-polyfill';
import Resume from './Resume.pdf'
import Modal from 'react-bootstrap/Modal'
import Contact from '../Contact'

smoothscroll.polyfill();

const Navigation = () => {
    const [contact, setContact] = useState(false);

    const contactClose = () => setContact(false);
    const contactShow = () => setContact(true);

    return (
        <div>
            <Router>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <HashLink smooth to='#Home'>
                    <Navbar.Brand href="#home">JT</Navbar.Brand>
                </HashLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <HashLink smooth to='#About'>
                        <Nav.Link href="#About">About</Nav.Link>
                    </HashLink>
                    <HashLink smooth to='#Experience'>
                        <Nav.Link href="#Experience">Experience</Nav.Link>
                    </HashLink>
                    <HashLink smooth to='#Projects'>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                    </HashLink>
                    <Nav.Link href={Resume}>Resume</Nav.Link>
                    <Nav.Link onClick={contactShow}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Router>

            <Modal centered show={contact} onHide={contactClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Send an email with the form below</Modal.Title>
                </Modal.Header>
                <Modal.Body><Contact /></Modal.Body>
            </Modal>
        </div>
    )
}
export default Navigation
