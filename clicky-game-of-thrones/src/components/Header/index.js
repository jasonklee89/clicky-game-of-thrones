import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand id="title" href="/"><i class="fas fa-crown"></i></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <div className="scores">Score: {props.score} | Top Score: {props.topScore}</div>
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;