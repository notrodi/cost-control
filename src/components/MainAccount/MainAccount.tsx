import './MainAccount.scss';
import { formatCents, formatWholePart } from '../../functions';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { useState } from 'react';
import { setBalance } from '../../store/balance/balance.slice';

export default function MainAccount() {
  const [isEdit, setIsEdit] = useState(false);
  const balance = useSelector((state: RootState) => state.balance);
  const [form, setForm] = useState({ value: '' });
  
  const dispatch = useDispatch<AppDispatch>();

  function editOnClickHandler() {
    setForm({ value: String(balance) })
    setIsEdit(prev => !prev);
  }

  function checkOnClickHandler() {
    dispatch(setBalance(Number(form.value)));
    setIsEdit(prev => !prev);
  }
  
  return (
    <div className='main-account'>
      <div className='main-account__title'>
        Общий баланс
        {
          isEdit ?
            <img
              className='main-account__edit'
              src='/icons/icon-check.svg'
              alt='icon'
              onClick={ () => checkOnClickHandler() } /> :
            <img
              className='main-account__edit'
              src='/icons/icon-edit.svg'
              alt='icon'
              onClick={ () => editOnClickHandler() } />
        }
      </div>
      {
        isEdit ?
          <input
            className='main-account__input'
            type="text"
            placeholder='0.00'
            value={ form.value }
            onChange={ (event) => {
              const raw = event.target.value;
              
              if (raw === '' || /^\d+(\.\d{0,2})?$/.test(raw)) {
                setForm(() => ({ value: raw }));
              }
            } } /> :
          <div className='main-account__value'>
            <span className='main-account__amount'>{ formatWholePart(balance) }</span>
            <span className='main-account__amount_alt'>{ `.${formatCents(balance)}` }</span>
            <span className='main-account__ruble'> &#8381;</span>
          </div>
      }
    </div>
  )
}
