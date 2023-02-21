import user from '../info/user.json';
import { Profile } from './Profile/Profile';
import data from '../info/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../info/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from '../info/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
