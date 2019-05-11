import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css";

function Instructions() {
    return (
        <Jumbotron className="text-center">
        <h1>Clicky Game of Thrones!</h1>
        <br/>
        <h5>Click an image to begin!</h5>
      </Jumbotron>
    )
}

export default Instructions;