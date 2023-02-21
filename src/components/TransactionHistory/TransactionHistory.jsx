import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <div className={css.container}>
        <thead>
          <tr>
            <th className={css.table_style}>Type</th>
            <th className={css.table_style}>Amount</th>
            <th className={css.table_style}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.table_style}>{type}</td>
              <td className={css.table_style}>{amount}</td>
              <td className={css.table_style}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};
