import React from 'react';
import './TextAreaElement.css';
import PropTypes from 'prop-types';

function TextAreaElement({
  state, setState, type, name, id, cols, rows, label, placeholder, messageError
}) {
  const regEx = /^[a-zA-Z0-9]{5,4000}$/;

  const changeState = (e) => {
    setState({ ...state, field: e.target.value });
    e.preventDefault();
  };

  const validation = () => {
    if (regEx) {
      if (regEx.test(state.field)) {
        setState({ ...state, valid: true });
      } else {
        setState({ ...state, valid: false });
      }
    }
  };

  const labelClass = (valid) => {
    let isValid = null;
    if (valid === true) {
      isValid = 'label-success';
    } else if (valid === false) {
      isValid = 'label-error';
    }
    return isValid;
  };

  const styleErrorText = (valid) => {
    let isValid = '';
    if (valid === true) {
      isValid = 'none';
    } else if (valid === false) {
      isValid = 'block';
    }
    return isValid;
  };

  const inputClass = (valid) => {
    let isValid = null;
    if (valid === true) {
      isValid = 'input__input input-success';
    } else if (valid === false) {
      isValid = 'input__input input-error';
    } else if (valid === null) {
      isValid = 'input__input';
    }
    return isValid;
  };

  return (
    <div className="form__textarea">
      <label htmlFor={name}>
        <span className={labelClass(state.valid)}>
          {label}
          <br />
          <br />
        </span>
        <textarea
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          type={type}
          regEx={regEx}
          label={label}
          placeholder={placeholder}
          onKeyUp={validation}
          onBlur={validation}
          onChange={changeState}
          valid={state.valid}
          className={inputClass(state.valid)}
        />
        <p
          className="contact__error-text"
          style={{ display: styleErrorText(state.valid) }}
        >
          {messageError}

        </p>
      </label>
    </div>

  );
}

TextAreaElement.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  messageError: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  state: PropTypes.shape({ field: PropTypes.string, valid: PropTypes.bool }).isRequired,
  setState: PropTypes.shape({ field: PropTypes.string, valid: PropTypes.bool }).isRequired
};

export default TextAreaElement;
