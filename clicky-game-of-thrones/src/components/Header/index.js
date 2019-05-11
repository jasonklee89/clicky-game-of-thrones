import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Clicky Game of Thrones</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Score: 0 | Top Score: 0
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;