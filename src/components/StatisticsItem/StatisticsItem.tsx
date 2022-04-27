import React from 'react';
import { IStatistic } from '../Interface/staistics.interface';
import style from './StatisticsItem.module.css';

interface Props {
  statisticInfo: IStatistic;
}

const r = () => Math.floor(Math.random() * 256);
const randomColor = () => 'rgba(' + r() + ',' + r() + ',' + r() + ', 0.6)';

const StatisticsItem = ({ statisticInfo: { label, percentage } }: Props) => (
  <li className={style.item} style={{ backgroundColor: randomColor() }}>
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </li>
);

export default StatisticsItem;
