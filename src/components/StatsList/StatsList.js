import React from 'react';
import PropTypes from 'prop-types';

const StatsList = ({ stats }) => (
  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
);

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default StatsList;
