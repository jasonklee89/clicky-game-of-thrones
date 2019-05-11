import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css";

function Instructions(props) {
    return (
        <Jumbotron className="text-center">
        <h1><i class="fas fa-crown"></i> Clicky Game of Thrones <i class="fas fa-crown"></i></h1>
        <br/>
        {/* Display informs user if they have guessed correctly */}
        <h5>{props.display}</h5>
      </Jumbotron>
    )
}

export default Instructions;