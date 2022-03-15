import styles from './Sidebar.module.scss';

import FilterButton from './FilterButton/FilterButton';

const buttonTitles = ['по имени', 'по городу'];

function Sidebar({ handleChange }) {
  return (
    <div className={styles.Sidebar}>
      <p>Сортировка</p>
      <FilterButton
        buttonTitle={buttonTitles[0]}
        handleChange={handleChange}
        filterName={'name'}
      />
      <FilterButton
        buttonTitle={buttonTitles[1]}
        handleChange={handleChange}
        filterName={'address.city'}
      />
    </div>
  );
}

export default Sidebar;
