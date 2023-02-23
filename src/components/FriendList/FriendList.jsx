import css from './FriendList.module.css';
import { FriendListIn } from './FriendListIn';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      <FriendListIn friends={friends} />
    </ul>
  );
};
