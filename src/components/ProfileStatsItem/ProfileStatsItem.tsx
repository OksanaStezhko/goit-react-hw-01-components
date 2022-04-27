import React from 'react';
import style from './ProfileStatsItem.module.css';

interface Props {
  label: string;
  quantity: number;
}
const ProfileStatsItem = ({ label, quantity = 0 }: Props) => (
  <li className={style.item}>
    <span className={style.label}>{label}</span>
    <span className={style.quantity}>{quantity}</span>
  </li>
);

export default ProfileStatsItem;
