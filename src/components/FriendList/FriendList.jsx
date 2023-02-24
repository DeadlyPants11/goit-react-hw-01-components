import css from './FriendList.module.css';
import { FriendListIn } from './FriendListIn';
import propTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListIn
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
      ;
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
    })
  ).isRequired,
};
