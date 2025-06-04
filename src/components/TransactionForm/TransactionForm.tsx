import { useState } from 'react';
import { getCategoryTitle } from '../../functions';
import { Category } from '../../types';
import './TransactionForm.scss';

export default function TransactionForm() {
  const FOMR_DEFAULT_VALUE = {
    value: '',
    category: Category.Products,
    description: '',
    date: new Date().toISOString().slice(0, 16)
  }
  const [form, setForm] = useState(FOMR_DEFAULT_VALUE);


  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log({
      ...form,
      date: form.date,
      value: (Number(form.value))
    });

    setForm(FOMR_DEFAULT_VALUE);
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
        <select
          className="transaction-form__input"
          id="category"
          value={ form.category }
          onChange={ (event) => setForm(prev => ({ ...prev, category: event.target.value as Category })) } >
          {
            Object.values(Category)
              .map(category => <option key={ category } value={ category }>{ getCategoryTitle(category) }</option>)
          }
        </select>
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