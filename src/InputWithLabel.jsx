import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function InputWithLabel({ label, value, onChange, isFocused }) {
  const inputRef = useRef();
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

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

const Input = ({ value, onChange, inputRef }) => {
  return (
    <input
      ref={inputRef}
      id="input"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

// props validation: (only to remove warnings)
InputWithLabel.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isFocused: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({ current: PropTypes.any }),
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({ current: PropTypes.any }),
};
