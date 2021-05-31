/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import InputElement from '../../elements/input-element/InputElement';

function Contact() {
  const [name, setName] = useState({ field: '', valid: null });
  const [email, setEmail] = useState({ field: '', valid: null });
  /* const [message, setMessage] = useState({ field: '', valid: null }); */

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces, may be wrotten with accents.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^[a-zA-Z0-9]{5,4000}$/
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact__form">
        <form>
          <InputElement
            state={name}
            setState={setName}
            label="User"
            placeholder="John Doe"
            type="text"
            name="user"
            messageError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener letras"
            regEx={expressions.name}
          />
          <InputElement
            state={email}
            setState={setEmail}
            label="E-Mail"
            placeholder="email@email.com"
            type="email"
            name="email"
            messageError="Please, enter a valid email."
            regEx={expressions.email}
          />
          <div className="form__textarea">
            <textarea name="message" id="message" cols="30" rows="10" />
          </div>
          <div className="form__terms">
            <label htmlFor="terms">
              <input type="checkbox" name="terms" id="terms" className="terms__input" />
              Acepto los terminos y condiciomes
            </label>
          </div>
          {false && (
          <div className="form__error-message">
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <strong>Error: </strong>
              Please fill in the form properly
            </p>
          </div>
          )}
          <div className="form__button">
            <button type="submit">Submit</button>
            <p className="button__success-message">Your message was sent!</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
