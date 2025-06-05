import { useState } from 'react';
import { getCategoryColor, getCategoryTitle } from '../../functions';
import { Category } from '../../types';
import './TransactionForm.scss';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { toggleTransaction } from '../../store/transactions/transactions.slice';
import { v4 } from 'uuid';
import { decrementBalance } from '../../store/balance/balance.slice';

export default function TransactionForm() {
  const FORM_DEFAULT_VALUE = {
    value: '',
    category: '',
    description: '',
    date: new Date().toISOString().slice(0, 16)
  }
  const [form, setForm] = useState(FORM_DEFAULT_VALUE);
  const dispatch = useDispatch<AppDispatch>();


  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const newTransaction = {
      ...form,
      id: v4(),
      date: form.date,
      value: (Number(form.value))
    }

    dispatch(toggleTransaction(newTransaction));
    dispatch(decrementBalance(form.value));

    setForm(FORM_DEFAULT_VALUE);
  }
  
  return (
    <form
      className="transaction-form"
       onSubmit={ handleSubmit } >
      <div className="transaction-form__item">
        <label
          className="transaction-form__label"
          htmlFor="value">Сумма</label>
        <input
          className="transaction-form__input"
          id="value"
          type="number"
          step="0.01"
          placeholder='0.00'
          value={ form.value }
          onChange={ (event) => {
            const raw = event.target.value;
            
            if (raw === '' || /^\d+(\.\d{0,2})?$/.test(raw)) {
              setForm(prev => ({ ...prev, value: raw }));
            }
          } } />
      </div>

      <div className="transaction-form__item">
        <label
          className="transaction-form__label"
          htmlFor="category">Категория</label>
          <div className="transaction-form__category">
            <div
              className="transaction-form__category__icon"
              style={{ 
                background: form.category
                  ? getCategoryColor(form.category as Category)
                  : '#e5e5e5'
              }} >
              <img src={ form.category
                ? `/categories/icon-${form.category}.svg`
                : '/categories/icon-question.svg' } alt="icon" />
            </div>
            <select
              className="transaction-form__input"
              id="category"
              value={ form.category }
              onChange={ (event) => setForm(prev => ({ ...prev, category: event.target.value as Category })) } >
              <option value="" hidden>Выберете категорию</option>
              {
                Object.values(Category)
                  .map(category => <option key={ category } value={ category }>{ getCategoryTitle(category) }</option>)
              }
            </select>
          </div>
      </div>

      <div className="transaction-form__item">
        <label
          className="transaction-form__label"
          htmlFor="description">Описание</label>
        <input
          className="transaction-form__input"
          id="description"
          type="text"
          value={ form.description }
          onChange={ (event) => setForm(prev => ({ ...prev, description: event.target.value })) } />
      </div>

      <div className="transaction-form__item">
        <label
          className="transaction-form__label"
          htmlFor="date">Дата и время</label>
        <input
          className="transaction-form__input"
          id="date"
          type="datetime-local"
          value={ form.date }
          onChange={ (event) => setForm(prev => ({ ...prev, date: event.target.value })) } />
      </div>
      
      <button
        className='transaction-form__button'
        type='submit' >
          Добавить
      </button>
    </form>
  )
}