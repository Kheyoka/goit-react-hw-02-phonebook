import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <ul>
      {items.map(contact => (
        <li key={contact.id}>
          <Contact
            {...contact}
            onDeleteContactFor={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
