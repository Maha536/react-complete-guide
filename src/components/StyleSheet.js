import React from 'react';
import './myStyles.css';

function Stylesheet(props) {
    let className = props.primary?'primary':'nonprime';
    return (
        <div>
            <h1 className={className}>Style Sheet</h1>
        </div>
    )
}

export default Stylesheet
