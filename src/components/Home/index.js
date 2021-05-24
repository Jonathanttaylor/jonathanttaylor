import {React, useState} from 'react'
import './Home.css'
import Modal from 'react-bootstrap/Modal'
import Contact from '../Contact'

const Home = () => {
    const [contact, setContact] = useState(false);

    const contactClose = () => setContact(false);
    const contactShow = () => setContact(true);

    return (
        <div id='Home'>
            <h1 className='name'>Jonathan Taylor</h1>
            <h3 className='intro'>A Fourth Year Computer Engineering Student</h3>
            <button className='button' onClick={contactShow}>Contact</button>

            <Modal centered show={contact} onHide={contactClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>Send an email with the form below or directly to <a href='mailto: jttaylor@mun.ca'>jttaylor@mun.ca</a></Modal.Title>
                </Modal.Header>
                <Modal.Body><Contact /></Modal.Body>
            </Modal>
        </div>
    )
}

export default Home
