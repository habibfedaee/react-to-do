import React from "react";
import PropTypes from "prop-types";

export default function InputWithLabel({ label, value, onChange }) {
  return (
    <div>
      <Label htmlFor="input">{label}</Label>
      <Input value={value} onChange={onChange} />
    </div>
  );
}

const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

const Input = ({ value, onChange }) => {
  return <input id="input" type="text" value={value} onChange={onChange} />;
};

// props validation:
InputWithLabel.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  todoTitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
