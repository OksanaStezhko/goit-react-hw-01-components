import React from 'react';
import style from './Transaction.module.css';
import { ITrans } from '../Interface/trans.interface';

interface Props {
  transactionInfo: ITrans;
}
const Transaction = ({
  transactionInfo: { type, amount, currency },
}: Props) => (
  <tr className={style.table_tr}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default Transaction;
