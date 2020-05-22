import React from 'react';

const Congrats = (props) => {
    return (
        <div data-test="component-congrats">
        {
            props.success && (<span data-test="congrats-message">
                Congratulations! You guess the word!
            </span>)
        }
    </div>
    )
}
 
export default Congrats;