import React from 'react';
import Transation from '../Transaction/Transaction';
import style from './TransactionHistory.module.css';
import { ITrans } from '../Interface/trans.interface';

interface Props {
  items: ITrans[];
}

const TransactionHistory = ({ items }: Props) => (
  <table className={style.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <Transation key={item.id} transactionInfo={item} />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
