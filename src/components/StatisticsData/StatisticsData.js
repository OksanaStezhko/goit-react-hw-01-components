import React from 'react';
import PropTypes from 'prop-types';

const StatisticsData = ({ label, percentage }) => (
  <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </>
);

StatisticsData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsData;
