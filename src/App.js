import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TableEmployees from './components/Table';

import './index.css';

const App = (props) => {

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
      .then(response => response.json())
      .then(response => props.dispatch({
        type: 'SET_DATA',
        payload: afterFetch(response.data)
      }));
  }, []);

  const afterFetch = (data) => {
    const employees = data.map(el => {
      const { phone, firstname, lastname, birthday } = el;
      return {
        'id': phone.replace('+', ''),
        'firstName': firstname,
        'lastName': lastname,
        'age': (new Date()).getFullYear() - birthday.split('-')[0]
      };
    });
    return employees;
  }

  const handleSelect = (id) => {
    isChecked(id)
      ? props.dispatch({ type: 'DESELECT', payload: id })
      : props.dispatch({ type: 'SELECT', payload: id })
  };

  const handleSelectAll = (checked) => {
    const allIds = props.employees.map(r => r.id);
    checked
      ? props.dispatch({ type: 'SELECT_ALL', payload: allIds })
      : props.dispatch({ type: 'DESELECT_ALL' })
  };

  const renderSelected = () => {
    const displayUsers = [];
    props.selected.forEach(id => {
      displayUsers.push(
        props.employees.find(empl => empl.id === id))
    });
    return displayUsers.length > 0 && displayUsers.map(
      (u, id) => `${u.firstName}${id < props.selected.length - 1 ? ', ' : ''}`
    )
  }

  const isChecked = (id) => props.selected.includes(id);

  return (
    <div className='app'>
      {
        props.employees.length > 0
        &&
        <TableEmployees
          handleSelect={handleSelect}
          handleSelectAll={handleSelectAll}
          isChecked={isChecked}
          renderSelected={renderSelected}
          employees={props.employees} />
      }
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
