import { UserContext } from './UserContex';
import PropTypes from 'prop-types';
import { useState } from 'react';

// const user = {
//   id: 123,
//   name: 'Santiago Caci',
//   emial: 'santiago@google.com',
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: 'mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
