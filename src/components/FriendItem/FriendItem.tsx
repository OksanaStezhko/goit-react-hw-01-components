import React from 'react';
import defaultAvatar from '../../defaultAvatar.svg';
import style from './FriendItem.module.css';
import { IFriend } from '../Interface/friend.interface';

interface Props {
  friend: IFriend;
}

const FriendItem = ({
  friend: { avatar = defaultAvatar, name, isOnline },
}: Props) => (
  <li className={style.item}>
    <span className={isOnline ? style.isOnline : style.isOffline}>
      {isOnline}
    </span>
    <img className={style.avatar} src={avatar} alt="Аватар" width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

export default FriendItem;
