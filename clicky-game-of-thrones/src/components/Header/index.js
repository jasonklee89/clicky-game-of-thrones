import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Clicky Game of Thrones</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Score: {props.score} | Top Score: {props.topScore}
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;