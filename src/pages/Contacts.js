import Form from 'components/Form/form';
import ContactList from 'components/Contacts/contacts';
import Filter from 'components/Filter/filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

export default function Contacts() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div className="main-contacts">
      <h1 className="form-text">Phonebook</h1>
      <Form />
      <h2 className="form-text">Contacts</h2>
      <Filter />
      {isLoading && !error && <h3>Request in progress...</h3>}
      {!isLoading && error && <h3>Error...{error}</h3>}
      <ContactList />
    </div>
  );
}
