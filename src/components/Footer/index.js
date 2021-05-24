import {React, useState} from 'react'
import './Footer.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Contact from '../Contact'

const Footer = () => {
    const [contact, setContact] = useState(false);

    const contactClose = () => setContact(false);
    const contactShow = () => setContact(true);

    return (
        <div className='footer'>
            <h1 className='text'>Looking to Get in Touch?</h1>
            <div style={{textAlign: 'center'}}>
                <Button center variant='info' size='lg' style={{fontSize: '30px', width: '175px'}} onClick={contactShow}>Email</Button>
            </div>
            <div style={{textAlign: 'center'}}>
                <Button variant='dark' className='git' onClick={() => {window.location.href='https://github.com/Jonathanttaylor'}}></Button>
                <Button variant='dark' className='in' onClick={() => {window.location.href='https://www.linkedin.com/in/jonathanttaylor'}}></Button>

            </div>

            <Modal centered show={contact} onHide={contactClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>Send an email with the form below or directly to <a href='mailto: jttaylor@mun.ca'>jttaylor@mun.ca</a></Modal.Title>
                </Modal.Header>
                <Modal.Body><Contact /></Modal.Body>
            </Modal>
        </div>
    )
}

export default Footer
