import React from "react";

const Form = (props) => {
  return (
    <div className="email">
      <input
        type="email"
        className="email--text"
        placeholder="janeappleseed@email.com"
        name="email"
        onChange={props.handleChange}
        onKeyDown={props.handleKeyDown}
      ></input>
      <button className="Login--button" onClick={props.handleClick}>
        Login
      </button>
    </div>
  );
};

export default Form;
