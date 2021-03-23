import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <StatisticsList statisticsList={stats}></StatisticsList>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
