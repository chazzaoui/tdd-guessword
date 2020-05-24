import React from "react";
import { connect } from "react-redux";

const Input = ({success}) => {
  return (
    <div data-test='component-input'>
      {!success && (
        <div>
          <form className="form-inline">
            <input
              className="mb-2 mx-m-3"
              data-test="input-box"
              placeholder="ENTER GUESS"
              type="text"
            ></input>
            <button
              className="btn btn-primary mb-2"
              data-test="submit-button"
              type="submit"
            >Submit!</button>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
