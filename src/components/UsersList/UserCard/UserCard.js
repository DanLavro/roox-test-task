import styles from './UserCard.module.scss';

function UserCard({ user, handleClick }) {
  return (
    <div className={styles.UserCard}>
      <div>
        <p>
          <span>ФИО:</span>
          {user.name}
        </p>
        <p>
          <span>город:</span>
          {user.address.city}
        </p>
        <p>
          <span>компания:</span>
          {user.company.name}
        </p>
      </div>
      <button onClick={() => handleClick(user)}>Редактировать</button>
    </div>
  );
}

export default UserCard;
