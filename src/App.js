import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import items from './transactions.json';

import React from 'react';

import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </Layout>
  );
}

export default App;
