import css from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendListIn = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
};

FriendListIn.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
  id: propTypes.number.isRequired,
};
