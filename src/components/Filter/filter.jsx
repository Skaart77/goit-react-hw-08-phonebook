import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, filterContacts, resetFilterContacts } from 'redux/slice';

import { getContacts } from 'redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFilterChange = e => {
    dispatch(resetFilterContacts());
    const { value: filterContact } = e.target;
    dispatch(updateFilter(filterContact.toUpperCase()));
    dispatch(filterContacts(contacts));
  };
  return (
    <label className="filter">
      Find contacts by name
      <input
        className="filter-input"
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
}

export default Filter;
