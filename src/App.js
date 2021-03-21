import user from './user.json';
import React from 'react';
import Description from './components/Description';
import StatsList from './components/StatsList';

function App() {
  return (
    <div class="profile">
      <Description
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
      ></Description>
      <StatsList stats={user.stats}></StatsList>
    </div>
  );
}

export default App;
