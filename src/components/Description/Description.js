import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ avatar, name, tag, location }) => (
  <div className="description">
    <img className="avatar" src={avatar} alt="Аватар пользователя" />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
);

Description.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
};

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
