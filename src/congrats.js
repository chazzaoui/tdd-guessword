import React from "react";

import Proptypes from "prop-types";

const Congrats = (props) => {
  return (
    <div data-test="component-congrats" className="alert alert-success">
      {props.success && (
        <span data-test="congrats-message">
          Congratulations! You guess the word!
        </span>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: Proptypes.bool.isRequired,
};

export default Congrats;
