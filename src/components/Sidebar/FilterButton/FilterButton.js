import styles from './FilterButton.module.scss';

function FilterButton({ buttonTitle, handleChange, filterName }) {
  return (
    <div className={styles.FilterButton}>
      <button onClick={() => handleChange(filterName)}>{buttonTitle}</button>
    </div>
  );
}

export default FilterButton;
