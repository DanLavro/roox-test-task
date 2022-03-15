import UserCard from './UserCard/UserCard';

import styles from './UsersList.module.scss';

function UsersList({ users, handleClick }) {
  return (
    <div className={styles.UsersList}>
      <h2>Список пользователей</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default UsersList;
