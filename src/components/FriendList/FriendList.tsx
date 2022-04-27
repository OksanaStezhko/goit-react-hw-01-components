import React from 'react';
import FriendItem from '../FriendItem/FriendItem';
import style from './FriendList.module.css';
import { IFriend } from '../Interface/friend.interface';

interface Props {
  friends: IFriend[];
}

const FriendList = ({ friends }: Props) => (
  <ul className={style.list}>
    {friends.map(friend => (
      <FriendItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

export default FriendList;
