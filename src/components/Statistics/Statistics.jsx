import css from './Statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.container}>
        {title && <h2 className="title">{title}</h2>}
        <ul className={css.stats_list}>
          {stats.map(({ id, label, percentage }) => (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  percentage: propTypes.string.isRequired,
};
