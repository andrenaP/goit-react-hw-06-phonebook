import PropTypes from 'prop-types';

import './Filter.css';
import ContactAnyInput from '../ContactAnyInput';
import { filtering } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(filtering(event.target.value));
  };
  return (
    <ContactAnyInput
      LableText="Find contacts by name"
      type="text"
      name="filter"
      handleChange={handleChangeFilter}
    />
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
