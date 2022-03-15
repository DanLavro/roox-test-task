import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import UsersList from './components/UsersList/UsersList';
import Editor from './components/Editor/Editor';

import styles from './App.module.scss';

const getValue = (obj, path) =>
  path.split('.').reduce((acc, key) => acc[key], obj);

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const [filtersState, setFiltersState] = useState('name');

  useEffect(() => {
    const getUsersData = async () => {
      setIsLoading(true);
      try {
        const usersData = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        ).then((response) => response.json());
        setUsers(usersData);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getUsersData();
  }, []);

  const handleClick = (UserId) => {
    setCurrentUser(UserId);
    setShowEditor((prev) => !prev);
  };

  const filtredData = [...users].sort(function (a, b) {
    const valA = getValue(a, filtersState);
    const valB = getValue(b, filtersState);

    return valA.localeCompare(valB);
  });

  return (
    <div className={styles.App}>
      <Sidebar filtersState={filtersState} handleChange={setFiltersState} />
      {isLoading ? (
        <p>Loading...</p>
      ) : showEditor ? (
        <Editor currentUserData={currentUser} />
      ) : (
        <UsersList users={filtredData} handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
