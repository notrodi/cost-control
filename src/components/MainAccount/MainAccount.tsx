import { useState } from 'react';
import './MainAccount.scss';
import { formatCents, formatWholePart } from '../../functions';

export default function MainAccount() {
  const [amount, setAmount] = useState(10000.00);
  
  return (
    <div className='main-account'>
      <div className='main-account__title'>
        Общий баланс
        <img className='main-account__edit' src='/icons/icon-edit.svg' alt='icon' />
      </div>
      <div>
        <span className='main-account__amount'>{ formatWholePart(amount) }</span>
        <span className='main-account__amount_alt'>{ `.${formatCents(amount)}` }</span>
        <span className='main-account__ruble'> &#8381;</span>
      </div>
    </div>
  )
}
