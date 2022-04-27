import React from 'react';
import defaultAvatar from '../../defaultAvatar.svg';
import { IUser } from '../Interface/user.interface';
import style from './ProfileDescription.module.css';

interface Props {
  user: IUser;
}

const Description = ({
  user: { avatar = defaultAvatar, name, tag, location },
}: Props) => (
  <div className={style.description}>
    <img className={style.avatar} src={avatar} alt="Аватар пользователя" />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>
);

export default Description;
