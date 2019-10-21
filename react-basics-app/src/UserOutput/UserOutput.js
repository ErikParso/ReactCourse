import React from 'react';

import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello i am {props.userName}.</p>
            <p>I am {props.age} years old.</p>
        </div>
    );
}

export default userOutput;