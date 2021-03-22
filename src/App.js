import user from './user.json';
import statisticalData from './statistical-data.json';
// import friends from './friends.json';
import React from 'react';

import Statistics from './components/Statistics/Statistics';
// import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Profile user={user}></Profile>
      <Statistics title="Upload stats" stats={statisticalData}></Statistics>;
    </>
  );
}

export default App;
