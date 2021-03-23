import React from 'react';
import PropTypes from 'prop-types';
import StatisticsData from '../StatisticsData/StatisticsData';
import style from './StatisticsList.module.css';

const StatisticsList = ({ statisticsList }) => (
  <ul className={style.list}>
    {statisticsList.map(({ id, label, percentage }) => (
      <li className="item" key={id}>
        <StatisticsData label={label} percentage={percentage}></StatisticsData>
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  statisticsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
