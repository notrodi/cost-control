import { useState } from 'react';
import './MainAccount.scss';

export default function MainAccount() {
  const [amount, setAmount] = useState(10000.00);
  
  return (
    <div className='main-account'>
      <div className='main-account__title'>
        Общий баланс
        <img className='main-account__edit' src='/icons/icon-edit.svg' alt='icon' />
      </div>
      <div>
        <span className='main-account__ruble'>&#8381; </span>
        {/* <span className='main-account__amount'>{ amount }</span> */}
        <span className='main-account__amount'>10'000</span>
        <span className='main-account__amount_alt'>.00</span>
      </div>
    </div>
  )
}
