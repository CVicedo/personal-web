/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';
import './InputElement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function InputElement({
  label, placeholder, type, name, messageError, regEx, state, setState
}) {
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

  const inputIconToShow = (valid) => {
    let isValid = null;
    if (valid === true) {
      isValid = 'input__icon icon-success';
    } else if (valid === false) {
      isValid = 'input__icon icon-error';
    } else {
      isValid = 'input__icon';
    }
    return isValid;
  };

  return (
    <label
      htmlFor={name}
    >
      <span className={labelClass(state.valid)}>
        {label}
        <br />
        <br />
      </span>
      <div className="contact__input">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={state.field}
          className={inputClass(state.valid)}
          onChange={changeState}
          onKeyUp={validation}
          onBlur={validation}
          valid={state.valid}
        />
        <FontAwesomeIcon
          icon={state.valid ? faCheckCircle : faTimesCircle}
          className={inputIconToShow(state.valid)}
        />
      </div>
      <p
        className="contact__error-text"
        style={{ display: styleErrorText(state.valid) }}
      >
        {messageError}

      </p>

    </label>
  );
}

InputElement.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  messageError: PropTypes.string.isRequired,
  state: PropTypes.shape({ field: PropTypes.string, valid: PropTypes.bool }).isRequired,
  setState: PropTypes.shape({ field: PropTypes.string, valid: PropTypes.bool }).isRequired,
  regEx: PropTypes.string.isRequired
};

export default InputElement;
