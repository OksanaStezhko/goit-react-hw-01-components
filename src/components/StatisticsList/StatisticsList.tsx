import React from 'react';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import { IStatistic } from '../Interface/staistics.interface';
import style from './StatisticsList.module.css';

interface Props {
  statisticsList: IStatistic[];
}

const StatisticsList = ({ statisticsList }: Props) => (
  <ul className={style.list}>
    {statisticsList.map(item => (
      <StatisticsItem key={item.id} statisticInfo={item} />
    ))}
  </ul>
);

export default StatisticsList;
