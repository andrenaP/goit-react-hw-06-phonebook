import PropTypes from 'prop-types';
import './ContactList.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getContactsItems } from 'redux/contactSlice';
import { getfilterValue } from 'redux/filterSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getfilterValue);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const deleteContact = id => {
    dispatch(filterContacts(id));
  };
  if (visibleContacts.length === 0) return 'Nothing found';
  return (
    <ul className="ListOfNames">
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span className="name">{name}</span>
            <span className="number">{number}</span>
            <button
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  deleteFunc: PropTypes.func.isRequired,
};
