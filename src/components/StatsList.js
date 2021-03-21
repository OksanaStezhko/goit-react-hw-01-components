import React from 'react';
import PropTypes from 'prop-types';

const StatsList = ({ stats }) => (
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
);

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default StatsList;
