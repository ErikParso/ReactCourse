import React from 'react';

const validation = (props) => {
    return(
        <div>
        {
            props.inputLength < 5 
                ? <p>Text too short!</p>
                : <p>text length is ok.</p>
        }
        </div>
    );
};

export default validation;