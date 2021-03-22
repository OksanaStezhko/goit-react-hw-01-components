import React from 'react';
import PropTypes from 'prop-types';
import Description from '../Description/Description';
import StatsList from '../StatsList/StatsList';

const Profile = ({ user }) => (
  <div className="Profile">
    <Description
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
    ></Description>
    <StatsList stats={user.stats}></StatsList>
  </div>
);

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
