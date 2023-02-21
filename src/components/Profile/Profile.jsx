import css from './Profile.module.css';
import propTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.container}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className={css.stats}>
          <li className={css.list}>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className={css.list}>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className={css.list}>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};
