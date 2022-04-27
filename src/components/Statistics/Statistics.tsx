import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';
import { IStatistic } from '../Interface/staistics.interface';
import style from './Statistics.module.css';

interface Props {
  title: string;
  stats: IStatistic[];
}
const Statistics = ({ title = '', stats }: Props) => (
  <section className={style.container}>
    {title && <h2 className={style.title}>{title}</h2>}
    <StatisticsList statisticsList={stats}></StatisticsList>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
