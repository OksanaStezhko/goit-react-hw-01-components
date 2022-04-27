import React from 'react';
import ProfileStatsItem from '../ProfileStatsItem/ProfileStatsItem';
import { TStats } from '../Interface/user.interface';
import style from './ProfileStatsList.module.css';

interface Props {
  stats: TStats;
}

const ProfileStatsList = ({ stats }: Props) => (
  <ul className={style.stats}>
    {Object.entries(stats).map(([key, value]) => (
      <ProfileStatsItem key={key} label={key} quantity={value} />
    ))}
  </ul>
);

export default ProfileStatsList;
