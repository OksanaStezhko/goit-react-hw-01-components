import React from 'react';

import ProfileDescription from '../ProfileDescription/ProfileDescription';
import ProfileStatsList from '../ProfileStatsList/ProfileStatsList';
import { IUser } from '../Interface/user.interface';
import style from './Profile.module.css';

interface Props {
  user: IUser;
}

const Profile = ({ user }: Props) => (
  <div className={style.container}>
    <ProfileDescription user={user} />
    <ProfileStatsList stats={user.stats} />
  </div>
);

export default Profile;
