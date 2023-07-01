import React from 'react';
import s from './TweetCard.module.css';
import Logo from '../../image/Logo.png';
import TweetImg from '../../image/Tweet.png';
// import Boy from '../../image/Boy.png';

 const TweetCard = ({ users, setUsers }) => {
    
    const handleClick = (userId) => {
        setUsers(users => {
          const updatedUsers = users.map(user => {
            if (user.id === userId) {
              if (user.isFollowing) {
                return {
                  ...user,
                  followers: user.followers - 1,
                  isFollowing: false
                };
              } else {
                return {
                  ...user,
                  followers: user.followers + 1,
                  isFollowing: true
                };
              }
            }
            return user;
          });
          localStorage.setItem('users', JSON.stringify(updatedUsers));
          return updatedUsers;
        });
      };
  return (
    <ul className={s.cards}>
      {users.map((user, i) => (
        <li className={s.card} key={user.id}>
          <img className={s.logo} src={Logo} alt="logo" />
          <img className={s.tweet} src={TweetImg} alt="tweet" />
          <div className={s.line}></div>
          <img
            className={s.avatar}
            src={user.avatar}
            alt="avatar"
            width="80px"
            height="80px"
          />
          <ul className={s.list}>
            <li>{user.tweets} TWEETS</li>
            <li>{user.followers} FOLLOWERS</li>
          </ul>
          <button 
          className={s.btn} 
          type="submit"
          onClick={() => handleClick(user.id)}
            style={{ backgroundColor: user.isFollowing ? '#5CD3A8' : '' }}>
            {user.isFollowing ? 'FOLLOWING' : 'FOLLOW'}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TweetCard