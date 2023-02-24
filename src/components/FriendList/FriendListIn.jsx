import css from './FriendList.module.css';

export const FriendListIn = ({ avatar, name, isOnline, id }) => {
  return (
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
  );
};
