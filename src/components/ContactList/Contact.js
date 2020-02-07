import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDeleteContactFor }) => (
  <>
    <span>{`${name}: ${number}`}</span>
    <button type="button" onClick={onDeleteContactFor}>
      Delete
    </button>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContactFor: PropTypes.func.isRequired,
};

export default Contact;
