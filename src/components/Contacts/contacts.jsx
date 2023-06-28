import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';

import { getContacts, getСontactsFilter } from '../../redux/selectors';

import { resetFilterContacts } from 'redux/slice';
import { TbTrashXFilled, TbUser } from 'react-icons/tb';

function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterContactArray = useSelector(getСontactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = e => {
    dispatch(resetFilterContacts());
    dispatch(deleteContact(e.target.dataset.id));
  };

  const resultArray =
    filterContactArray.length > 0 ? filterContactArray : contacts;

  return (
    <ul className="contact">
      {resultArray.map(({ id, name, number }) => (
        <li className="contact-item" key={id}>
          <TbUser size={20} color="black" />
          <span>{` ${name}: ${number}`}</span>
          <button
            data-id={id}
            className="contact-button "
            type="button"
            onClick={handleDeleteContact}
          >
            <TbTrashXFilled size={15} color="red" />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
