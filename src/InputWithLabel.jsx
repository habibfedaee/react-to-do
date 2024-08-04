import React from "react";
import PropTypes from "prop-types";

export default function InputWithLabel({ label, value, onChange }) {
  return (
    <div>
      <label htmlFor="todoTitle">{label}</label>
      <input
        name="title"
        id="todoTitle"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// props validation:

InputWithLabel.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};
