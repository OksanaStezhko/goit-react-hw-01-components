import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsData.module.css';

const StatisticsData = ({ label, percentage }) => (
  <li class="item">
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </li>
);

StatisticsData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsData;
